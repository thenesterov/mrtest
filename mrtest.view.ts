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
			return this.current_test()?.Source(null)!.text(next) ?? ""
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
		profile(id_?: undefined): $mrtest_person {
			const id = this.$.$mol_state_arg.value( "profile" )
			if( !id ) return null!

			return this.$.$hyoo_crus_glob.Node($hyoo_crus_ref(id), $mrtest_person)
		}

		@ $mol_mem
		access() {
			return this.$.$mol_state_arg.value( 'access' ) !== null
		}

		@ $mol_mem
		pages(): readonly any[] {
			return [
				this.Menu(),
				... this.profile() ? [ this.Profile_page( this.profile() ) ] : [],
				... this.access() ? [ this.Access_page() ] : [],
				this.Gap('left'),
				this.Source_page(),
				this.Output_page(),
				this.Gap('right'),
			]
		}

		@ $mol_mem
		need_print_source( next?: boolean | undefined ): boolean {
			return this.$.$$.$mol_state_local.value("print_source", next) ?? true;
		}

		@ $mol_mem_key
		validator(id: string) {
			return this.$.$hyoo_crus_glob.Node($hyoo_crus_ref(id), $mrtest_validator)
		}

		@ $mol_mem
		add_validator( next?: any ) {
			this.current_workspace()!.validator_make()
		}

		@ $mol_mem
		validators_list(): readonly $mol_view[] {
			return this.validators_ids().map( id => {
				return this.Validator( id )
			} )
		}

		validators_ids( next? : number[] ) : string[] {
			return this.current_workspace()?.validator_list().map(validator => validator.ref().description!).reverse() ?? []
		}

		validator_delete(id: string, next?: any) {
			this.current_workspace()?.validator_delete(id)
		}

		@ $mol_mem_key
		validator_title( id: any, next?: string | undefined ): string {
			return this.validator(id)?.Title(null)!.val(next) ?? ""
		}

		@ $mol_mem_key
		validator_source( id: any, next?: string | undefined ): string {
			return this.validator(id)?.Source(null)!.text(next) ?? ""
		}

		@ $mol_mem
		validators_items() {
			return [
				this.Validator_header(),
				this.Validators_list(),
				... this.workspace_editable() ? [this.Add_validator()] : []
			]
		}

		@ $mol_mem
		validator_delete_button( id: any ): readonly any[] {
			return this.workspace_editable() ? super.validator_delete_button(id) : []
		}

		@ $mol_mem
		search_enabled() {
			if ($mol_state_arg.value("search") == "") {
				return true;
			}
			else {
				this.search_filter("");
				return false;
			}
		}

		@ $mol_mem
		search_highlight() {
			if (this.search_enabled()) {
				return "var(--mol_theme_focus)"
			}
			return "var(--mol_theme_control)"
		}

		@ $mol_mem
		menu_body(): readonly any[] {
			return [
				... this.search_enabled() ? [this.Search_input()] : [],
				... this.test_creation_available() ? [this.Create_test_button()] : [],
				this.Workspaces_list()
			]
		}

		@ $mol_mem
		menu_tools(): readonly any[] {
			return [
				this.Search(),
				... this.workspace_editable() ? [this.Access_link()] : [],
				this.Add_workspace()
			]
		}

		@ $mol_mem
		search_filter( next?: string | undefined ): string {
			return next ?? ""
		}

		highlight_test_item_link( id: any ): string {
			if (id == $mol_state_arg.value("test")) {
				return "var(--mol_theme_focus)"
			}
			return "var(--mol_theme_control)"
		}

		@ $mol_mem
		person() {
			return this.$.$hyoo_crus_glob.home( $mrtest_person )
		}

		@ $mol_mem
		person_id() {
			return this.person().ref().description!
		}

		@ $mol_mem_key
		workspace(id: string) {
			return this.$.$hyoo_crus_glob.Node($hyoo_crus_ref(id), $mrtest_workspace)
		}

		@ $mol_mem
		set_default_lang() {
			$mol_locale.lang( 'ru' )
		}
		
		@ $mol_mem
		current_workspace() {
			this.set_default_lang();

			const workspace_id = this.$.$mol_state_arg.value("")
			if (!workspace_id) {
				return null;
			}
			return this.workspace(workspace_id)
		}

		workspace_make() {
			const workspace = this.person().workspace_make()
			this.$.$mol_state_arg.go({ "": workspace.ref().description! })
		}

		@ $mol_mem_key
		test(id: string) {
			return this.$.$hyoo_crus_glob.Node($hyoo_crus_ref(id), $mrtest_test)
		}

		@ $mol_mem
		current_test() {
			const test_id = this.$.$mol_state_arg.value("test")
			if (!test_id) {
				return null;
			}
			return this.test(test_id)
		}

		test_creation_available(): boolean {
			return this.current_workspace() && this.workspace_editable() ? true : false;
		}

		@ $mol_mem
		workspace_editable() {
			return this.current_workspace()?.can_change() ?? false;
		}

		@ $mol_mem
		test_editable() {
			return this.current_test()?.can_change() ?? false;
		}

		test_make() {
			const test = this.current_workspace()!.test_make()
			this.$.$mol_state_arg.go({ "test": test.ref().description! })
		}

		test_title( next?: string | undefined ): string {
			return this.current_test()?.Title(null)!.val(next) ?? ""
		}

		test_item_sub( id: any ): readonly any[] {
			return [
				this.Test_item_link(id),
				... this.test_editable() ? [this.Test_item_options(id)] : []
			]
		}

		@ $mol_mem_key
		test_item_title( id : string,) {
			return this.test(id).Title(null)!.val() || `${ id }`.slice(18);
		}

		@ $mol_mem
		tests_ids(): readonly string[] {
			return this.current_workspace()?.test_list().map(test => test.ref().description!).reverse() ?? []
		}

		override tests_list(): readonly any[] {
			let tests = Object.fromEntries(this.tests_ids().map(id => [
				id, this.test_item_title(id)
			]))
			let sorted = Object.entries(tests).sort((a, b) => a[1].localeCompare(b[1]));
			let filtered = sorted.filter($mol_match_text(this.search_filter(), name => [name[1]]))
			let tests_ids = Object.keys(Object.fromEntries(filtered))

			return tests_ids.map( id => {
				return this.Test_item( id )
			} )
		}

		test_delete( id: any, next?: any ) {
			this.current_workspace()!.test_delete(id);
		}

		test_selected( id: any, next?: any ) {
			this.$.$mol_state_arg.go({ "test": id })
		}
	}
}
