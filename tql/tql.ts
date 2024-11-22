namespace $.$$ {
	export function $mrtest_tql_get(query: string = "", tree2: $mol_tree2): $mol_tree2 | undefined {
		let result = tree2!.kids;
		let cursor_index = 0;

		for(let i: number = 0; i < query.length; i++) {
			if (query[i] == ">") {
				try {
					result = result![cursor_index].kids;
				} catch (e) {
					return undefined;
				}
				cursor_index = 0;
			}
			else if (query[i] == "+") {
				cursor_index++;
			}
			else {
				return undefined;
			}
		}

		return result[cursor_index];
	}
}
