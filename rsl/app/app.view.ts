namespace $.$$ {
	export class $mrtest_rsl_app extends $.$mrtest_rsl_app {
		@ $mol_mem
		input( next?: string | undefined ): string {
			return $mol_state_local.value("input", next) ?? ""
		}

		@ $mol_mem
		output( next?: string | undefined ): string {
			let input_tree = this.$.$mol_tree2_from_string(this.input().trim() + "\n");
			let rsl_output = new $mrtest_rsl().transform($mrtest_tql_get("", input_tree) ?? this.$.$$.$mol_tree2_from_string("\n"));
			return (this.$.$mol_tree2_to_string(rsl_output) + "\n\n" + JSON.stringify(this.$.$mol_tree2_to_json(rsl_output), null, 4)) ?? ""
		}
	}
}
