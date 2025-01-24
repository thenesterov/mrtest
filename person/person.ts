namespace $ {
	export class $mrtest_person extends $hyoo_crus_home.with({
		Name: $hyoo_crus_atom_str,
		Workspace: $hyoo_crus_list_ref_to(() => $mrtest_workspace )
	}) {
		@ $mol_action
		workspace_make() {
			return this.Workspace(null)!.make({ '': $hyoo_crus_rank_read })
		}
	}
}
