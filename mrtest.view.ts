interface $mrtest_validator {
	title? : string
	code?: string
}

namespace $.$$ {
	export class $mrtest extends $.$mrtest {
		@ $mol_mem
		source_page_body(): readonly $mol_view[] {
			if (this.selected_langauge() == "mrtest") {
				return [this.Source()]
			} else if (this.selected_langauge() == "postman") {
				return [this.Source_postman()]
			} else {
				return []
			}
		}

		@ $mol_mem
		source_code(next?: string): string {
			return this.$.$mol_state_local.value('source_code', next) ?? '';
		}

		@ $mol_mem
		output_code(next?: string): string {
			this.$.$$.$mol_state_local.value('called')
			let compiler = new this.$.$mrtest_dsl()

			return compiler.compile(this.source_code())
		}

		@ $mol_mem
		result_to_copy(): string {
			return this.output_code()
		}

		@ $mol_mem
		pages(): readonly any[] {
			return [
				this.Menu(),
				this.Gap('left'),
				this.Source_page(),
				this.Output_page(),
				this.Gap('right')
			]
		}

		@ $mol_mem
		need_print_source( next?: boolean | undefined ): boolean {
			return this.$.$$.$mol_state_local.value("print_source", next) ?? true;
		}

		@ $mol_mem
		new_id() {
			return Math.max( 1 , 1 + Math.max( ... this.validators_ids() ) )
		}

		@ $mol_mem
		add_validator( next?: any ) {
			var title = ''
			
			var id = this.new_id()
			var task = { title, code: '' }
			this.validator( id , task )
			
			this.validators_ids([ ... this.validators_ids(), id ])
		}

		@ $mol_mem
		validators_list(): readonly $mol_view[] {
			return this.validators_ids().map( id => this.Validator( id ) )
		}

		validator( id : number , next? : $mrtest_validator | null ) {
			const key = this.state_key( `${this.selected_langauge()}-validators-${id}` )

			if( next === void 0 ) {
				return this.$.$mol_state_local.value<$mrtest_validator>( key ) || { title : '' , code : '' }
			}

			this.$.$mol_state_local.value( key , next )

			return next || null
		}

		validators_ids( next? : number[] ) : number[] {
			return this.$.$mol_state_local.value( this.state_key( `${this.selected_langauge()}-validators` ) , next ) || []
		}

		validator_delete(id: number, next?: any) {
			const key = this.state_key( `${this.selected_langauge()}-validators-${id}` )
			this.$.$mol_state_local.value(key, null);
			let validators: number[] = this.$.$mol_state_local.value( this.state_key( `${this.selected_langauge()}-validators`)) as [] || []
			validators = validators.filter((obj: number) => obj != id);
			this.$.$mol_state_local.value( this.state_key( `${this.selected_langauge()}-validators` ) , validators )
		}

		@ $mol_mem_key
		validator_title( id: any, next?: string | undefined ): string {
			this.$.$$.$mol_state_local.value('called', next)
			const key = this.state_key( `${this.selected_langauge()}-validators-${id}` )

			let validator: $mrtest_validator = this.$.$$.$mol_state_local.value(key)!
			validator.title = next ?? validator.title

			this.$.$$.$mol_state_local.value(key, validator)
			return validator.title ?? ''
		}

		@ $mol_mem_key
		validator_source( id: any, next?: string | undefined ): string {
			this.$.$$.$mol_state_local.value('called', next)
			const key = this.state_key( `${this.selected_langauge()}-validators-${id}` )

			let validator: $mrtest_validator = this.$.$$.$mol_state_local.value(key)!
			validator.code = next ?? validator.code

			this.$.$$.$mol_state_local.value(key, validator)
			return validator.code ?? ''
		}
	}
}
