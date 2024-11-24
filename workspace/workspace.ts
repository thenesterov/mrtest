namespace $.$$ {
	export class $mrtest_workspace extends $hyoo_crus_entity.with({
		Title: $hyoo_crus_atom_str,
		Test: $hyoo_crus_list_ref_to(() => $mrtest_test )
	}) {
		@ $mol_action
		test_make() {
			return this.Test(null)!.make(this.land())
		}

		@ $mol_mem
		test_list() {
			return this.Test()?.remote_list() ?? []
		}

		@ $mol_action
		test_delete(id: any) {
			this.Test()?.has($hyoo_crus_ref(id), false);
		}
	}
}
