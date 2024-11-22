namespace $.$$ {
	export class $mrtest_rsl {
		transform(tree: $mol_tree2, initial: boolean = true): $mol_tree2 {
			if (tree === undefined || (!tree.type && !tree.value)) {
				return $.$$.$mol_tree2_from_string("\n");
			}

			if (initial && tree.type == "string") {
				let result = {
					"type": "string"
				}

				if ($mrtest_tql_get("", tree)) {
					if ($mrtest_tql_get("", tree)!.type == "*") {
						result = {...result, ...$.$$.$mol_tree2_to_json($mrtest_tql_get("", tree)!) as object}
					}
				}

				return $mol_tree2_from_json(result);
			}
			if (initial && tree.type == "number") {
				let result = {
					"type": "number"
				}

				if ($mrtest_tql_get("", tree)) {
					if ($mrtest_tql_get("", tree)!.type == "*") {
						result = {...result, ...$.$$.$mol_tree2_to_json($mrtest_tql_get("", tree)!) as object}
					}
				}

				return $mol_tree2_from_json(result);
			}
			if (initial && tree.type == "integer") {
				let result = {
					"type": "integer"
				}

				if ($mrtest_tql_get("", tree)) {
					if ($mrtest_tql_get("", tree)!.type == "*") {
						result = {...result, ...$.$$.$mol_tree2_to_json($mrtest_tql_get("", tree)!) as object}
					}
				}

				return $mol_tree2_from_json(result);
			}
			if (initial && tree.type == "boolean") {
				let result = {
					"type": "boolean"
				}

				if ($mrtest_tql_get("", tree)) {
					if ($mrtest_tql_get("", tree)!.type == "*") {
						result = {...result, ...$.$$.$mol_tree2_to_json($mrtest_tql_get("", tree)!) as object}
					}
				}

				return $mol_tree2_from_json(result);
			}
			if (initial && tree.type == "null") {
				let result = {
					"type": "null"
				}

				if ($mrtest_tql_get("", tree)) {
					if ($mrtest_tql_get("", tree)!.type == "*") {
						result = {...result, ...$.$$.$mol_tree2_to_json($mrtest_tql_get("", tree)!) as object}
					}
				}

				return $mol_tree2_from_json(result);
			}

			if (tree.type == "object") {
				let nested_node = $mrtest_tql_get("", tree);
				let result: Record<string, any> = {
					"type": "object"
				}

				let meta: Record<string, any> = {}
				let meta_properties: Record<string, any> = {}

				if (nested_node) {
					let properties: Record<string, any> = {};
					let pluses_count = 0;

					while(nested_node) {
						if (nested_node.type == "*") {
							meta = $.$$.$mol_tree2_to_json(nested_node) as object;
						}
						else if (nested_node.type == "**") {
							nested_node = nested_node.struct("*", nested_node.kids);
							meta_properties = $.$$.$mol_tree2_to_json(nested_node) as object;
						}
						else {
							properties = {...properties, ...($.$$.$mol_tree2_to_json(this.transform(nested_node, false)) as object)}
						}
						nested_node = $mrtest_tql_get("+".repeat(pluses_count), tree)
						pluses_count++;
					}
					properties = {...properties, ...meta_properties}
					result.properties = properties;
				}

				result = {...result, ...meta}

				return $mol_tree2_from_json(result);
			}
			else if (tree.type == "array") {
				let nested_node = $mrtest_tql_get("", tree);
				let result: Record<string, any> = {
					"type": "array"
				}

				let meta: Record<string, any> = {}
				let meta_items: Record<string, any> = {}

				if (nested_node) {
					let items: any[] = [];
					let pluses_count = 1;

					while(nested_node) {
						if (nested_node.type == "*") {
							meta = $.$$.$mol_tree2_to_json(nested_node) as object;
						}
						else if (nested_node.type == "**") {
							nested_node = nested_node.struct("*", nested_node.kids);
							meta_items = $.$$.$mol_tree2_to_json(nested_node) as object;
						}
						else {
							items.push($.$$.$mol_tree2_to_json(this.transform(nested_node, false)) as object)
						}
						nested_node = $mrtest_tql_get("+".repeat(pluses_count), tree)
						pluses_count++;
					
					}
					items.push(meta_items)
					result.items = items;
				}

				result = {...result, ...meta}

				return $mol_tree2_from_json(result);
			}
			else {
				let nested_node = $mrtest_tql_get(">", tree);
				let result: Record<string, any> = {}

				let property = tree.type;
				let type: string | string[] = $mrtest_tql_get("", tree)?.type ?? "string"

				if (type.slice(-1) == "?") {
					type = type.slice(0, -1) + ",null"
				}
				if (type.includes(",")) {
					type = type.split(",");
				}

				let meta: Record<string, any> = {}

				if ($mrtest_tql_get(">", tree)?.type == "*") {
					meta = {...($.$$.$mol_tree2_to_json($mrtest_tql_get(">", tree)!) as object)}
				}

				result[property] = {
					"type": type
				}

				result[property] = {...result[property], ...meta}

				if (nested_node) {
					if (type.includes("object")) {
						let properties: Record<string, any> = {}
						let pluses_count = 1;

						let meta: Record<string, any> = {}
						let meta_properties: Record<string, any> = {}

						while(nested_node) {
							if (nested_node.type == "*") {
								meta = $.$$.$mol_tree2_to_json(nested_node) as object;
							}
							else if (nested_node.type == "**") {
								nested_node = nested_node.struct("*", nested_node.kids);
								meta_properties = $.$$.$mol_tree2_to_json(nested_node) as object;
							}
							else {
								properties = {...properties, ...($.$$.$mol_tree2_to_json(this.transform(nested_node, false)) as object)}
							}
							nested_node = $mrtest_tql_get(">" + "+".repeat(pluses_count), tree)
							pluses_count++;
						}

						properties = {...properties, ...meta_properties}
						result[property].properties = properties;
						result[property] = {...result[property], ...meta}
					}
					if (type.includes("array")) {
						let items: any[] = [];
						let pluses_count = 1;

						let meta: Record<string, any> = {}
						let meta_items: Record<string, any> = {}
	
						while(nested_node) {
							if (nested_node.type == "*") {
								meta = $.$$.$mol_tree2_to_json(nested_node) as object;
							}
							else if (nested_node.type == "**") {
								nested_node = nested_node.struct("*", nested_node.kids);
								meta_items = $.$$.$mol_tree2_to_json(nested_node) as object;
							}
							else {
								items.push($.$$.$mol_tree2_to_json(this.transform(nested_node, false)) as object)
							}
							nested_node = $mrtest_tql_get(">" + "+".repeat(pluses_count), tree)
							pluses_count++;
						
						}
						items.push(meta_items);
						result[property].items = items;
						result[property] = {...result[property], ...meta}
					}
				}

				return $mol_tree2_from_json(result);
			}
		}
	}
}
