const expression_registry: any = {};

function print_source(source: string, comment_literal: string) {
	if (($.$$.$mol_state_local.value("print_source") ?? true) == true) {
		return source.split('\n').map(line => {
			return `${comment_literal}\t${line}`
		}).join('\n') + '\n'
	} else {
		return ""
	}
}

namespace $.$$ {
	export class $mrtest_dsl {
		tests = {
			"status": {
				"$mrtest_operator_eql": {
					"$mrtest_type_number": $mrtest_dsl_test_status_eql_number,
					"$mrtest_type_env": $mrtest_dsl_test_status_eql_env,
					"variables": {
						"$mrtest_type_number": $mrtest_dsl_test_status_eql_variable_number,
						"$mrtest_type_env": $mrtest_dsl_test_status_eql_variable_env,
					}
				},
				"$mrtest_operator_noteql": {
					"$mrtest_type_number": $mrtest_dsl_test_status_noteql_number,
					"$mrtest_type_env": $mrtest_dsl_test_status_noteql_env,
					"variables": {
						"$mrtest_type_number": $mrtest_dsl_test_status_noteql_variable_number,
						"$mrtest_type_env": $mrtest_dsl_test_status_noteql_variable_env,
					}
				},
				"$mrtest_operator_gt": {
					"$mrtest_type_number": $mrtest_dsl_test_status_gt_number,
					"$mrtest_type_env": $mrtest_dsl_test_status_gt_env,
					"variables": {
						"$mrtest_type_number": $mrtest_dsl_test_status_gt_variable_number,
						"$mrtest_type_env": $mrtest_dsl_test_status_gt_variable_env,
					}
				},
				"$mrtest_operator_gte": {
					"$mrtest_type_number": $mrtest_dsl_test_status_gte_number,
					"$mrtest_type_env": $mrtest_dsl_test_status_gte_env,
					"variables": {
						"$mrtest_type_number": $mrtest_dsl_test_status_gte_variable_number,
						"$mrtest_type_env": $mrtest_dsl_test_status_gte_variable_env,
					}
				},
				"$mrtest_operator_lt": {
					"$mrtest_type_number": $mrtest_dsl_test_status_gt_number,
					"$mrtest_type_env": $mrtest_dsl_test_status_gt_env,
					"variables": {
						"$mrtest_type_number": $mrtest_dsl_test_status_lt_variable_number,
						"$mrtest_type_env": $mrtest_dsl_test_status_lt_variable_env,
					}
				},
				"$mrtest_operator_lte": {
					"$mrtest_type_number": $mrtest_dsl_test_status_lte_number,
					"$mrtest_type_env": $mrtest_dsl_test_status_lte_env,
					"variables": {
						"$mrtest_type_number": $mrtest_dsl_test_status_lte_variable_number,
						"$mrtest_type_env": $mrtest_dsl_test_status_lte_variable_env,
					}
				},
				"$mrtest_operator_in": {
					"$mrtest_type_array_number": $mrtest_dsl_test_status_in_array_number,
					"$mrtest_type_array_env": $mrtest_dsl_test_status_in_array_env,
					"$mrtest_type_number": $mrtest_dsl_test_status_in_number,
					"$mrtest_type_number_masked": $mrtest_dsl_test_status_in_number_masked,
					"$mrtest_type_env": $mrtest_dsl_test_status_in_env,
					"$mrtest_type_range": $mrtest_dsl_test_status_in_range,
					"variables": {
						"$mrtest_type_array_number": $mrtest_dsl_test_status_in_variable_array_number,
						"$mrtest_type_array_env": $mrtest_dsl_test_status_in_variable_array_env,
						"$mrtest_type_number": $mrtest_dsl_test_status_in_variable_number,
						"$mrtest_type_number_masked": $mrtest_dsl_test_status_in_variable_number_masked,
						"$mrtest_type_env": $mrtest_dsl_test_status_in_variable_env,
						"$mrtest_type_range": $mrtest_dsl_test_status_in_variable_range,
					}
				},
				"$mrtest_operator_is": {
					"$mrtest_type_validator": $mrtest_dsl_test_status_is_validator,
					"variables": {
						"$mrtest_type_validator": $mrtest_dsl_test_status_is_variable_validator,
					}
				}
			},
			"execution-time": {
				"$mrtest_operator_eql": {
					"$mrtest_type_time": $mrtest_dsl_test_execution_time_eql_time,
					"variables": {
						"$mrtest_type_time": $mrtest_dsl_test_execution_time_eql_variable_time
					}
				},
				"$mrtest_operator_noteql": {
					"$mrtest_type_time": $mrtest_dsl_test_execution_time_noteql_time,
					"variables": {
						"$mrtest_type_time": $mrtest_dsl_test_execution_time_noteql_variable_time
					}
				},
				"$mrtest_operator_gt": {
					"$mrtest_type_time": $mrtest_dsl_test_execution_time_gt_time,
					"variables": {
						"$mrtest_type_time": $mrtest_dsl_test_execution_time_gt_variable_time
					}
				},
				"$mrtest_operator_gte": {
					"$mrtest_type_time": $mrtest_dsl_test_execution_time_gte_time,
					"variables": {
						"$mrtest_type_time": $mrtest_dsl_test_execution_time_gte_variable_time
					}
				},
				"$mrtest_operator_lt": {
					"$mrtest_type_time": $mrtest_dsl_test_execution_time_lt_time,
					"variables": {
						"$mrtest_type_time": $mrtest_dsl_test_execution_time_lt_variable_time
					}
				},
				"$mrtest_operator_lte": {
					"$mrtest_type_time": $mrtest_dsl_test_execution_time_lte_time,
					"variables": {
						"$mrtest_type_time": $mrtest_dsl_test_execution_time_lte_variable_time
					}
				},
				"$mrtest_operator_in": {
					"$mrtest_type_time_range": $mrtest_dsl_test_execution_time_in_time_range,
					"$mrtest_type_array_time": $mrtest_dsl_test_execution_time_in_array_time,
					"$mrtest_type_time": $mrtest_dsl_test_execution_time_in_time,
					"variables": {
						"$mrtest_type_time_range": $mrtest_dsl_test_execution_time_in_variable_time_range,
						"$mrtest_type_array_time": $mrtest_dsl_test_execution_time_in_variable_array_time,
						"$mrtest_type_time": $mrtest_dsl_test_execution_time_in_variable_time
					}
				},
				"$mrtest_operator_is": {
					"$mrtest_type_validator": $mrtest_dsl_test_execution_time_is_validator,
					"variables": {
						"$mrtest_type_validator": $mrtest_dsl_test_execution_time_is_variable_validator
					}
				}
			},
			"headers": {
				"$mrtest_operator_contains": {
					"$mrtest_type_string": $mrtest_dsl_test_headers_contains_string,
					"$mrtest_type_array_string": $mrtest_dsl_test_headers_contains_array_string,
					"$mrtest_type_array_check": $mrtest_dsl_test_headers_contains_array_check,
					"variables": {
						"$mrtest_type_string": $mrtest_dsl_test_headers_contains_variable_string,
						"$mrtest_type_array_string": $mrtest_dsl_test_headers_contains_variable_array_string,
					}
				}
			},
			"body": {
				"$mrtest_operator_is": {
					"$mrtest_type_validator": $mrtest_dsl_test_body_is_validator,
					"variables": {
						"$mrtest_type_validator": $mrtest_dsl_test_body_is_variable_validator,
					}
				},
				"$mrtest_operator_match": {
					"$mrtest_type_object": $mrtest_dsl_test_body_match_object,
					"$mrtest_type_rsl": $mrtest_dsl_test_body_match_rsl,
					"variables": {
						"$mrtest_type_object": $mrtest_dsl_test_body_match_variable_object,
						"$mrtest_type_rsl": $mrtest_dsl_test_body_match_variable_rsl,
					}
				}
			},
			"get_value": {
				"$mrtest_operator_is": {
					"$mrtest_type_validator": $mrtest_dsl_test_get_value_is_validator,
					"variables": {
						"$mrtest_type_validator": $mrtest_dsl_test_get_value_is_variable_validator 
					}
				},
				"$mrtest_operator_eql": {
					"$mrtest_type_number": $mrtest_dsl_test_get_value_eql_number,
					"$mrtest_type_bool": $mrtest_dsl_test_get_value_eql_bool,
					"$mrtest_type_string": $mrtest_dsl_test_get_value_eql_string,
					"$mrtest_type_env": $mrtest_dsl_test_get_value_eql_env,
					"variables": {
						"$mrtest_type_number": $mrtest_dsl_test_get_value_eql_variable_number,
						"$mrtest_type_bool": $mrtest_dsl_test_get_value_eql_variable_bool,
						"$mrtest_type_string": $mrtest_dsl_test_get_value_eql_variable_string,
						"$mrtest_type_env": $mrtest_dsl_test_get_value_eql_variable_env,
					}
				},
				"$mrtest_operator_noteql": {
					"$mrtest_type_number": $mrtest_dsl_test_get_value_noteql_number,
					"$mrtest_type_bool": $mrtest_dsl_test_get_value_noteql_bool,
					"$mrtest_type_string": $mrtest_dsl_test_get_value_noteql_string,
					"$mrtest_type_env": $mrtest_dsl_test_get_value_noteql_env,
					"$mrtest_type_object": $mrtest_dsl_test_get_value_noteql_object,
					"variables": {
						"$mrtest_type_number": $mrtest_dsl_test_get_value_noteql_variable_number,
						"$mrtest_type_bool": $mrtest_dsl_test_get_value_noteql_variable_bool,
						"$mrtest_type_string": $mrtest_dsl_test_get_value_noteql_variable_string,
						"$mrtest_type_env": $mrtest_dsl_test_get_value_noteql_variable_env,
						"$mrtest_type_object": $mrtest_dsl_test_get_value_noteql_variable_object,
					}
				},
				"$mrtest_operator_gt": {
					"$mrtest_type_number": $mrtest_dsl_test_get_value_gt_number,
					"$mrtest_type_env": $mrtest_dsl_test_get_value_gt_env,
					"variables": {
						"$mrtest_type_number": $mrtest_dsl_test_get_value_gt_variable_number,
						"$mrtest_type_env": $mrtest_dsl_test_get_value_gt_variable_env,
					}
				},
				"$mrtest_operator_gte": {
					"$mrtest_type_number": $mrtest_dsl_test_get_value_gte_number,
					"$mrtest_type_env": $mrtest_dsl_test_get_value_gte_env,
					"variables": {
						"$mrtest_type_number": $mrtest_dsl_test_get_value_gte_variable_number,
						"$mrtest_type_env": $mrtest_dsl_test_get_value_gte_variable_env,
					}
				},
				"$mrtest_operator_lt": {
					"$mrtest_type_number": $mrtest_dsl_test_get_value_lt_number,
					"$mrtest_type_env": $mrtest_dsl_test_get_value_lt_env,
					"variables": {
						"$mrtest_type_number": $mrtest_dsl_test_get_value_lt_variable_number,
						"$mrtest_type_env": $mrtest_dsl_test_get_value_lt_variable_env,
					}
				},
				"$mrtest_operator_lte": {
					"$mrtest_type_number": $mrtest_dsl_test_get_value_lte_number,
					"$mrtest_type_env": $mrtest_dsl_test_get_value_lte_env,
					"variables": {
						"$mrtest_type_number": $mrtest_dsl_test_get_value_lte_variable_number,
						"$mrtest_type_env": $mrtest_dsl_test_get_value_lte_variable_env,
					}
				},
				"$mrtest_operator_in": {
					"$mrtest_type_range": $mrtest_dsl_test_get_value_in_range,
					"$mrtest_type_number_masked": $mrtest_dsl_test_get_value_in_number_masked,
					"$mrtest_type_number": $mrtest_dsl_test_get_value_in_number,
					"$mrtest_type_array_number": $mrtest_dsl_test_get_value_in_array_number,
					"$mrtest_type_string": $mrtest_dsl_test_get_value_in_string,
					"$mrtest_type_array_string": $mrtest_dsl_test_get_value_in_array_string,
					"$mrtest_type_env": $mrtest_dsl_test_get_value_in_env,
					"$mrtest_type_array_env": $mrtest_dsl_test_get_value_in_array_env,
					"variables": {
						"$mrtest_type_range": $mrtest_dsl_test_get_value_in_variable_range,
						"$mrtest_type_number_masked": $mrtest_dsl_test_get_value_in_variable_number_masked,
						"$mrtest_type_number": $mrtest_dsl_test_get_value_in_variable_number,
						"$mrtest_type_array_number": $mrtest_dsl_test_get_value_in_variable_array_number,
						"$mrtest_type_string": $mrtest_dsl_test_get_value_in_variable_string,
						"$mrtest_type_array_string": $mrtest_dsl_test_get_value_in_variable_array_string,
						"$mrtest_type_env": $mrtest_dsl_test_get_value_in_variable_env,
						"$mrtest_type_array_env": $mrtest_dsl_test_get_value_in_variable_array_env,
					}
				}
			},
			"get_array": {
				"$mrtest_operator_eql": {
					"$mrtest_type_array": $mrtest_dsl_test_get_array_eql_array,
					"variables": {
						"$mrtest_type_array": $mrtest_dsl_test_get_array_eql_variable_array,
					}
				},
				"$mrtest_operator_noteql": {
					"$mrtest_type_array": $mrtest_dsl_test_get_array_noteql_array,
					"variables": {
						"$mrtest_type_array": $mrtest_dsl_test_get_array_noteql_variable_array,
					}
				},
				"$mrtest_operator_is": {
					"$mrtest_type_validator": $mrtest_dsl_test_get_array_is_validator,
					"variables": {
						"$mrtest_type_validator": $mrtest_dsl_test_get_array_is_variable_validator,
					}
				},
				"$mrtest_operator_contains": {
					"$mrtest_type_array": $mrtest_dsl_test_get_array_contains_array,
					"variables": {
						"$mrtest_type_array": $mrtest_dsl_test_get_array_contains_variable_array,
					}
				}
			},
			"get_object": {
				"$mrtest_operator_eql": {
					"$mrtest_type_object": $mrtest_dsl_test_get_object_eql_object,
					"variables": {
						"$mrtest_type_object": $mrtest_dsl_test_get_object_eql_variable_object,
					}
				},
				"$mrtest_operator_noteql": {
					"$mrtest_type_object": $mrtest_dsl_test_get_object_noteql_object,
					"variables": {
						"$mrtest_type_object": $mrtest_dsl_test_get_object_noteql_variable_object,
					}
				},
				"$mrtest_operator_is": {
					"$mrtest_type_validator": $mrtest_dsl_test_get_object_is_validator,
					"variables": {
						"$mrtest_type_validator": $mrtest_dsl_test_get_object_is_variable_validator,
					}
				},
				"$mrtest_operator_contains": {
					"$mrtest_type_array_string": $mrtest_dsl_test_get_object_contains_array_string,
					"$mrtest_type_string": $mrtest_dsl_test_get_object_contains_string,
					"variables": {
						"$mrtest_type_array_string": $mrtest_dsl_test_get_object_contains_variable_array_string,
						"$mrtest_type_string": $mrtest_dsl_test_get_object_contains_variable_string,
					}
				}
			},
			"variable": {
				"$mrtest_type_time_range": $mrtest_dsl_test_variable_time_range,
				"$mrtest_type_array_number": $mrtest_dsl_test_variable_array_number,
				"$mrtest_type_array_env": $mrtest_dsl_test_variable_array_env,
				"$mrtest_type_number": $mrtest_dsl_test_variable_number,
				"$mrtest_type_number_masked": $mrtest_dsl_test_variable_number_masked,
				"$mrtest_type_env": $mrtest_dsl_test_variable_env,
				"$mrtest_type_range": $mrtest_dsl_test_variable_range,
				"$mrtest_type_array_time": $mrtest_dsl_test_variable_array_time,
				"$mrtest_type_time": $mrtest_dsl_test_variable_time,
				"$mrtest_type_array_string": $mrtest_dsl_test_variable_array_string,
				"$mrtest_type_validator": $mrtest_dsl_test_variable_validator,
				"$mrtest_type_object": $mrtest_dsl_test_variable_object,
				"$mrtest_type_array": $mrtest_dsl_test_variable_array,
				"$mrtest_type_bool": $mrtest_dsl_test_variable_bool,
				"$mrtest_type_rsl": $mrtest_dsl_test_variable_rsl,
				"$mrtest_type_string": $mrtest_dsl_test_variable_string,
			}
		}

		variables = {}

		compile(source: string): string {
			let preprocessed_source = this.preprocess(source);

			if (preprocessed_source == '') {
				return preprocessed_source
			}

			let dsl_tree = $.$$.$mol_tree2_from_string(`${preprocessed_source}\n`);

			let target = this.get_target(dsl_tree)

			const target_visitors = {
				'postman': new $mrtest_dsl_visitor_postman()
			}

			const visitor = target_visitors[target.name as keyof typeof target_visitors]

			let validators = this.extract_validators(source)
			let visitor_validators = this.get_validators(target.name)

			let result = ""

			validators.forEach(validator => {
				result += visitor_validators[validator] ?? ""
			})

			for(const kid of target.kids) {
				result += this.parse(kid, visitor)
			}

			return result.trim()
		}

		extract_validators(source: string): string[] {
			let validators = new Set<string>();

			source.match(/\@\w+/g)?.forEach(validator => {
				validators.add(validator.slice(1))
			})

			return [...validators]
		}

		@ $mol_mem
		current_workspace() {
			const workspace_id = $mol_state_arg.value("")
			if (!workspace_id) {
				return null;
			}
			return $hyoo_crus_glob.Node($hyoo_crus_ref(workspace_id), $mrtest_workspace)
		}

		get_validators(target_name: string): Record<string, string> {
			let validators: Record<string, string> = {}

			for(const validator of this.current_workspace()?.validator_list() ?? []) {
					let title = validator.Title(null)?.val(undefined)!
					let source = validator.Source(null)?.text(undefined)!
					validators[title] = source + (source ? '\n\n' : '')
				}

			return validators
		}

		parse(tree: $mol_tree2, visitor: $mrtest_dsl_visitor) {
			if (this.is_variable(tree)) {
				return this.parse_variable(tree, visitor)
			}

			if (this.is_expression(tree)) {
				return this.parse_expression(tree, visitor)
			}

			if (this.is_case(tree)) {
				return this.parse_case(tree, visitor)
			}

			if (this.is_get(tree, visitor)) {
				return this.parse_get(tree, visitor)
			}

			return ""
		}

		is_expression(tree: $mol_tree2): boolean {
			if (
				tree.type.startsWith('[') &&
				tree.type.endsWith(']') &&
				tree.kids[0] && tree.kids[0].kids[0]
			) {
				return true
			}

			return false
		}

		parse_expression(tree: $mol_tree2, visitor: $mrtest_dsl_visitor): string {
			const response_element = tree.type.slice(1, -1)
			const operator = $mrtest_operators[tree.kids[0].type as keyof typeof $mrtest_operators]
			for (const type_ of $mrtest_types) {
				const type__ = new type_()
				if (type__.is_type(tree.kids[0].kids as $mol_tree2[])) {
					const value = type__.parse(tree.kids[0].kids as $mol_tree2[])
					if (!operator) {
						return `// Не найден оператор: ${tree.kids[0].type}`
					}

					// @ts-ignore
					if (!this.tests[response_element][operator.name]) {
						return `// Элемент ответа [${response_element}] не поддерживает оператор ${operator.name}`
					}

					// @ts-ignore
					let test = this.tests[response_element][operator.name][type_.name];

					if (type_.name == "$mrtest_type_variable") {
						// @ts-ignore
						let variable_type = this.variables[value].type
						// @ts-ignore
						test = this.tests[response_element][operator.name]["variables"][variable_type]
					}

					if (!test) {
						return `// Не найден тест для типа ${type_.name}`
					}

					return print_source($$.$mol_tree2_to_string(tree).trim(), '//') + new test(value).accept(visitor)
				}
			}
			return "// Не найдено"
		}

		is_case(tree: $mol_tree2): boolean {
			if (tree.type == "case" && tree.kids && tree.kids[0].type.startsWith("$")) {
				return true
			}
			else {
				return false
			}
		}

		parse_case(tree: $mol_tree2, visitor: $mrtest_dsl_visitor): string {
			const tab = (value: string) =>
					value.split("\n")
					.map((line, index) => index === 0 ? line : "\t" + line)
					.join("\n");

			let [case_start, case_end] = new $mrtest_dsl_test_case(tree.kids[0].type.slice(1)).accept(visitor).split('%%')
			let body = ""
			for(const kid of tree.kids[0].kids) {
				body += '\n\t' + tab(this.parse(kid, visitor).slice(0, -2)).trimStart() + '\n'
			}
			return case_start + body.trimEnd() + case_end
		}


		is_get(tree: $mol_tree2, visitor: $mrtest_dsl_visitor) {
			if ((tree.type == "get" || tree.type == "get[]" || tree.type == "get{}") && tree.kids.length && tree.kids[0].value) {
				return true
			}
			else {
				return false
			}
		}

		parse_get(tree: $mol_tree2, visitor: $mrtest_dsl_visitor) {
			const raw = tree.kids[0].value
			let node_path = ""

			let key = ""
			let index = ""

			let is_key = false;
			let is_index = false;
			let quoted = false;

			let brackates_stack = []

			for (let i = 0; i < raw.length; i++) {
				if (raw[i] == "[" && brackates_stack.length == 0 && !is_key) {
					if (!isNaN(Number(raw.slice(i+1, raw.slice(i).search(']')+i)))) {
						node_path += "["
						is_index = true;
					}
					else {
						if (raw[i+1] == '"' && raw[raw.slice(i+2).search(']')+i+1]) {
							quoted = true;
							if (!isNaN(Number(raw.slice(i+2, raw.slice(i+2).search(']')+i+1)))) {
								node_path += "["
								is_index = true;
							}
							else {
								node_path += '['
								is_key = true;
							}
						}
						else {
							node_path += '["'
							is_key = true;
						}
					}
				}
				else if (raw[i] == "]" && brackates_stack.length == 0) {
					if (is_key) {
						if (raw[i-1] == '\\') {
								key += ']'
						}
						else {
							if (quoted) {
								node_path += key + ']'
								quoted = false;
							}
							else {
								node_path += key + '"]'
							}
							key = ""
							is_key = false
						}
					}
					else if (is_index) {
						node_path += index + ']'
						index = ""
						is_index = false
						quoted = false
					}
				}
				else {
					if (raw[i] == '[' && raw[i-1] != '\\') {
						brackates_stack.push('[')
					}
					if (raw[i] == ']' && raw[i-1] != '\\') {
						if (brackates_stack[brackates_stack.length - 1] == '[') {
							brackates_stack.pop()
						}
					}
					if (is_key) {
						key += raw[i]
					}
					else if (is_index) {
						index += raw[i]
					}
				}
			}

			node_path = node_path.replaceAll('\\[', '[')
			node_path = node_path.replaceAll('\\]', ']')

			let get_value_start: string = "";
			let get_value_end: string = "";

			let checks: string[] = []

			for(const check of tree.kids[0].kids) {
				const operator = $mrtest_operators[check.type as keyof typeof $mrtest_operators]
				for (const type_ of $mrtest_types) {
					const type__ = new type_()
					if (type__.is_type(check.kids as $mol_tree2[])) {
						const value = type__.parse(check.kids as $mol_tree2[])
						if (!operator) {
							checks.push(`// Не найден оператор: ${check.type}\n`)
							break;
						}

						let get_type = tree.type == "get" ? "get_value" : (tree.type == "get[]" ? "get_array" : (tree.type == "get{}" ? "get_object" : ""))

						// @ts-ignore
						if (!this.tests[get_type][operator.name]) {
							if (get_type == "get_array") {
								checks.push(`// Списки не поддерживают оператор ${operator.name}\n`)
								break;
							}
							else if (get_type == "get_object") {
								checks.push(`// Объекты не поддерживают оператор ${operator.name}\n`)
								break;
							}
							else {
								checks.push(`// Числа и строки не поддерживают оператор ${operator.name}\n`)
								break;
							}
						}

						let test: $mrtest_dsl_test

						// @ts-ignore
						test = this.tests[get_type][operator.name][type_.name];

						if (type_.name == "$mrtest_type_variable") {
							// @ts-ignore
							let variable_type = this.variables[value].type
							// @ts-ignore
							test = this.tests[get_type][operator.name]["variables"][variable_type]
						}

						if (!test) {
							checks.push(`// Не найден тест для типа ${type_.name}\n`)
							break;
						}

						[get_value_start, get_value_end] = visitor.get_template(test).split('%%')

						// @ts-ignore
						checks.push(new test(value).accept(visitor))
						break;
					}
				}
			}

			return print_source($$.$mol_tree2_to_string(tree).trim(), '//') + `var test = pm.response.json()${node_path}\n\n` + get_value_start + checks.join('\t').trim() + get_value_end
		}

		is_variable(tree: $mol_tree2): boolean {
			if (tree.type && tree.kids[0].type == "=" && tree.kids[0].kids[0]) {
				return true
			}
			else {
				return false
			}
		}

		parse_variable(tree: $mol_tree2, visitor: $mrtest_dsl_visitor): string {
			let variable: {
				name: string,
				value: any,
			}

			for (const type_ of $mrtest_types) {
				const type__ = new type_()
				if (type__.is_type(tree.kids[0].kids as $mol_tree2[])) {
					const value = type__.parse(tree.kids[0].kids as $mol_tree2[])
					variable = {
						name: tree.type,
						value: value
					}

					// @ts-ignore
					this.variables[variable.name] = {
						type: type_.name,
						value: variable.value
					}

					// @ts-ignore
					const test = this.tests["variable"][type_.name];

					if (!test) {
						return `// Невозможно создать переменную с типом ${type_.name}\n\n`
					}

					return print_source($$.$mol_tree2_to_string(tree).trim(), '//') + new test(variable).accept(visitor);
				}
			}

			return ''
		}

		preprocess(source: string): string {
			let result = source;

			// delete comments
			result = source.split('\n').map(line => {
				if (!line.trimStart().startsWith('--')) {
					let result_line = line;
					if (result_line.includes('--') && !result_line.includes('\\')) {
						return result_line.slice(0, line.indexOf('--'))
					}
					return result_line
				}
			}).join('\n')

			// delete all double \n
			while (result.includes('\n\n')) {
				result = result.replace('\n\n', '\n');
			}

			// trim result
			result = result.trim();

			return result;
		}

		get_target(tree: $mol_tree2): {"name": string, "kids": $mol_tree2[]} | never {
			let impossible_to_recognize_target = new Error("Невозможно определить таргет")

			try {
				if (tree.kids[0].type == '=') {
					let target = tree.kids[0].kids[0];
					return {
						"name": target.type,
						"kids": target.kids as $mol_tree2[]
					}
				} else { 
					throw impossible_to_recognize_target
				}
			} catch {
				throw impossible_to_recognize_target
			}
		}
	}
}
