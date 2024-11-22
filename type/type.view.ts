namespace $.$$ {
	type FromTo = {from: number, to: number}

	export type Check = {
		'inspectee': string,
		'operator': $mrtest_operator,
		'number_masked'?: FromTo,
		'string'?: string,
		'number'?: number,
		'range'?: FromTo,
		'env'?: string,
		'variable'?: string,
		'array_string'?: Array<string>,
		'array_number'?: Array<number>,
		'array_range'?: Array<FromTo>,
		'array_env'?: Array<string>,
	}

	export abstract class $mrtest_type {
		abstract is_type(value: $mol_tree2[]): boolean
		abstract parse(value: $mol_tree2[]): any
	}

	export class $mrtest_type_number extends $mrtest_type {
		is_type( value: $mol_tree2[] ): boolean {
			return !isNaN(Number(value[0].type)) && value[0].type != ''
		}

		parse( value: $mol_tree2[] ): number {
			return Number(value[0].type)
		}
	}

	export class $mrtest_type_number_masked extends $mrtest_type {
		is_type( value: $mol_tree2[] ): boolean {
			return !isNaN(Number(value[0].type.replaceAll('x', '0'))) && value[0].type != ''
		}

		parse( value: $mol_tree2[] ): FromTo {
			return {
				from: Number(value[0].type.replaceAll('x', '0')),
				to: Number(value[0].type.replaceAll('x', '9'))
			}
		}
	}

	export class $mrtest_type_string extends $mrtest_type {
		is_type( value: $mol_tree2[] ): boolean {
			return true
		}

		parse( value: $mol_tree2[] ): string {
			return value[0].type || value[0].value
		}
	}

	export class $mrtest_type_env extends $mrtest_type {
		is_type( value: $mol_tree2[] ): boolean {
			return value[0].type.startsWith('$')
		}

		parse( value: $mol_tree2[] ): string {
			return value[0].type.slice(1)
		}
	}

	export class $mrtest_type_array_number extends $mrtest_type {
		is_type( value: $mol_tree2[] ): boolean {
			return value.length > 1 && value.every(node => !isNaN(Number(node.type)) && node.type != '')
		}

		parse( value: $mol_tree2[] ) {
			return value.map(kid => {
				return kid.type
			})
		}
	}

	export class $mrtest_type_array_string extends $mrtest_type {
		is_type( value: $mol_tree2[] ): boolean {
			return value.length > 1 && value.every(node => node.type != '' || node.value != '') && !value.every(node => node.kids.length)
		}

		parse( value: $mol_tree2[] ) {
			return value.map(kid => {
				return kid.type || kid.value
			})
		}
	}

	export class $mrtest_type_array_env extends $mrtest_type {
		is_type( value: $mol_tree2[] ): boolean {
			return value.length > 1 && value.every(node => node.type.startsWith('$'))
		}

		parse( value: $mol_tree2[] ) {
			return value.map(kid => {
				return kid.type.slice(1)
			})
		}
	}

	export class $mrtest_type_range extends $mrtest_type {
		range_regexp = /(\d+)\.\.(\d+)/

		is_type( value: $mol_tree2[] ): boolean {
			return this.range_regexp.test(value[0].type)
		}

		parse( value: $mol_tree2[] ): FromTo {
			return {
				from: Number(value[0].type.match(this.range_regexp)![1]),
				to: Number(value[0].type.match(this.range_regexp)![2]),
			}
		}
	}

	export class $mrtest_type_time extends $mrtest_type {
		time_regexp = /^(\d+)([s|m|ms]{1,2})$/

		is_type( value: $mol_tree2[] ): boolean {	
			return !!this.time_regexp.test(value[0].type)
		}

		parse( value: $mol_tree2[] ): number {
			const unit = value[0].type.match(this.time_regexp)![2]
			let time_value = Number(value[0].type.match(this.time_regexp)![1]);

			switch (unit) {
				case "s":
					time_value *= 1000
					break;
				case "m":
					time_value *= 1000 * 60
					break;
			}

			return time_value
		}
	}

	export class $mrtest_type_time_range extends $mrtest_type {
		time_regexp = /^(\d+)([s|m|ms]{1,2})$/
		time_range_regexp = /^((\d+)([s|m|ms]+)?)\.\.((\d+)([s|m|ms]{1,2}))$/

		is_type( value: $mol_tree2[] ): boolean {
			return !!this.time_range_regexp.test(value[0].type)
		}

		// @ts-ignore
		parse( value: $mol_tree2[] ): FromTo {
			const left_value = value[0].type.match(this.time_range_regexp)![1]
			const right_value = value[0].type.match(this.time_range_regexp)![4]

			const left_value_time: {'value': number, unit: string} | null = this.parse_time(left_value)
			const right_value_time: {'value': number, unit: string} | null = this.parse_time(right_value)

			if (right_value_time) {
				if (left_value_time) {
					return {
						from: Number(this.convert_to_ms(left_value_time.value, left_value_time.unit)),
						to: this.convert_to_ms(right_value_time.value, right_value_time.unit)
					}
				} else {
					return {
						from: Number(this.convert_to_ms(Number(left_value), right_value_time.unit)),
						to: this.convert_to_ms(right_value_time.value, right_value_time.unit)
					}
				}
			}
		}

		parse_time(value: string): {value: number, unit: string} | null {
			let unit = value.match(this.time_regexp)
			let time_value = value.match(this.time_regexp)

			if (!time_value) {
				// @ts-ignore
				time_value = Number(value)
			} else {
				// @ts-ignore
				time_value = Number(time_value[1])
			}

			if (!unit) {
				return null
			}

			// @ts-ignore
			unit = unit[2]

			return {
				// @ts-ignore
				'value': time_value,
				// @ts-ignore
				'unit': unit
			}
		}

		convert_to_ms(value: number, unit: string): number {
			switch (unit) {
				case "s":
					value *= 1000
					break;
				case "m":
					value *= 1000 * 60
					break;
			}

			return value
		}
	}

	export class $mrtest_type_array_time extends $mrtest_type {
		time_regexp = /^(\d+)([s|m|ms]{1,2})$/

		is_type( value: $mol_tree2[] ): boolean {
			return value.length > 1 && value.every(node => !!this.time_regexp.test(node.type))
		}

		parse( value: $mol_tree2[] ) {
			return value.map(kid => {
				const unit = kid.type.match(this.time_regexp)![2]
				let time_value = Number(kid.type.match(this.time_regexp)![1]);

				switch (unit) {
					case "s":
						time_value *= 1000
						break;
					case "m":
						time_value *= 1000 * 60
						break;
				}
	
				return time_value
			})
		}
	}

	export class $mrtest_type_validator extends $mrtest_type {
		is_type( value: $mol_tree2[] ): boolean {
			return value[0].type.startsWith('@')
		}

		parse( value: $mol_tree2[] ) {
			let args: any[] = []

			for (const arg of value[0].kids) {
				if (arg.type == "/" || arg.type == "*") {
					args.push(($$.$mol_tree2_to_json(arg)))
				}
				else {
					if (!isNaN(Number(arg.type)) && arg.type != '') {
						args.push(Number(arg.type))
					} else {
						args.push(arg.type || arg.value)
					}
				}
			}

			return {
				"name": value[0].type.slice(1),
				"args": args
			}
		}
	}

	export class $mrtest_type_array_check extends $mrtest_type {

		is_type( value: $mol_tree2[] ): boolean {
			if (
				value[0].kids[0] && value[0].kids[0].kids[0]
			) {
				return true
			}

			return false
		}

		parse( value: $mol_tree2[] ): Array<Check> {
			let checks: Array<Check> = []

			for (const check of value) {
				if (check && check.kids.length && check.kids.every(kid => kid.kids.length)) {
					const inspectee = check.type || check.value
					const operator = $mrtest_operators[check.kids[0].type as keyof typeof $mrtest_operators]
	
					let result_check: Check | null = null
	
					for (const type_ of $mrtest_types) {
						const type__ = new type_()
						if (type__.is_type(check.kids[0].kids as $mol_tree2[])) {
							const value = type__.parse(check.kids[0].kids as $mol_tree2[])
							switch(type_.name) {
								case "$mrtest_type_array_number":
									result_check = {
										inspectee: inspectee,
										operator: operator,
										'array_number': value as Array<number>
									}
									break;
								case "$mrtest_type_array_env":
									result_check = {
										inspectee: inspectee,
										operator: operator,
										'array_env': value as Array<string>
									}
									break;
								case "$mrtest_type_number":
									result_check = {
										inspectee: inspectee,
										operator: operator,
										'number': value as number
									}
									break;
								case "$mrtest_type_number_masked":
									result_check = {
										inspectee: inspectee,
										operator: operator,
										'number_masked': value as FromTo
									}
									break;
								case "$mrtest_type_env":
									result_check = {
										inspectee: inspectee,
										operator: operator,
										'env': value as string
									}
									break;
								case "$mrtest_type_variable":
									result_check = {
										inspectee: inspectee,
										operator: operator,
										'variable': value as string
									}
									break;
								case "$mrtest_type_range":
									result_check = {
										inspectee: inspectee,
										operator: operator,
										'range': value as FromTo
									}
									break;
								case "$mrtest_type_array_string":
									result_check = {
										inspectee: inspectee,
										operator: operator,
										'array_string': value as Array<string>
									}
									break;
								case "$mrtest_type_string":
									result_check = {
										inspectee: inspectee,
										operator: operator,
										'string': value as string
									}
									break;
							}
						}
	
						if (result_check) {
							checks.push(result_check)
							break;
						}
					}
				}
			}

			return checks
		}
	}

	export class $mrtest_type_bool extends $mrtest_type {
		is_type( value: $mol_tree2[] ): boolean {
			return value[0].type == "false" || value[0].type == "true"
		}

		parse( value: $mol_tree2[] ) {
			return value[0].type == "true"
		}
	}

	export class $mrtest_type_object extends $mrtest_type {
		is_type( value: $mol_tree2[] ): boolean {
			return value[0].type == "*"
		}

		parse( value: $mol_tree2[] ) {
			return $$.$mol_tree2_to_json(value[0]);
		}
	}

	export class $mrtest_type_array extends $mrtest_type {
		is_type( value: $mol_tree2[] ): boolean {
			return value[0].type == "/"
		}

		parse( value: $mol_tree2[] ) {
			return $$.$mol_tree2_to_json(value[0]);
		}
	}

	export class $mrtest_type_variable extends $mrtest_type {
		is_type( value: $mol_tree2[] ): boolean {
			return value[0].type.startsWith('*') && value[0].type != "*"
		}

		parse( value: $mol_tree2[] ): string {
			return value[0].type.slice(1)
		}
	}

	export class $mrtest_type_rsl extends $mrtest_type {
		is_type( value: $mol_tree2[] ): boolean {
			return value[0].type == "#"
		}

		parse( value: $mol_tree2[] ) {
			return $$.$mol_tree2_to_json(new $mrtest_rsl().transform(value[0].kids[0]))
		}
	}

	export const $mrtest_types = [
			$mrtest_type_rsl,
			$mrtest_type_time_range,
			$mrtest_type_array_number,
			$mrtest_type_array_env,
			$mrtest_type_number,
			$mrtest_type_number_masked,
			$mrtest_type_env,
			$mrtest_type_variable,
			$mrtest_type_range,
			$mrtest_type_array_time,
			$mrtest_type_time,
			$mrtest_type_array_string,
			$mrtest_type_validator,
			$mrtest_type_object,
			$mrtest_type_array,
			$mrtest_type_array_check,
			$mrtest_type_bool,
			$mrtest_type_string,
		]
}
