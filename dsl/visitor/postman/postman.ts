namespace $.$$ {
	export class $mrtest_dsl_visitor_postman extends $mrtest_dsl_visitor {
		custom_stringify = (obj: any, tab_offset: number = 1) =>
			JSON.stringify(obj, null, 4)
				.split("\n")
				.map((line, index) => index === 0 ? line : "\t".repeat(tab_offset) + line)
				.join("\n");

		template() {
			return "";
		}
		variable_time_range( test: $mrtest_dsl_test_variable_time_range ): string {
			debugger;
			return `var ${test.value.name} = {\n\tfrom_ms: ${test.value.value.from}\n\tto_ms: ${test.value.value.to}\n};\n\n`
		}

		variable_array_number( test: $mrtest_dsl_test_variable_array_number ): string {
			return `var ${test.value.name} = [\n\t${test.value.value.join(',\n\t')}\n];\n\n`
		}

		variable_array_env( test: $mrtest_dsl_test_variable_array_env ): string {
			return `var ${test.value.name} = [\n\tpm.environment.get("${test.value.value.join('"),\n\tpm.environment.get("')}")\n];\n\n`
		}

		variable_number( test: $mrtest_dsl_test_variable_number ): string {
			return `var ${test.value.name} = ${test.value.value};\n\n`
		}

		variable_number_masked( test: $mrtest_dsl_test_variable_number_masked ): string {
			return `var ${test.value.name} = {\n\tfrom: ${test.value.value.from},\n\tto: ${this.custom_stringify(test.value.value.to)}\n};\n\n`
		}

		variable_env( test: $mrtest_dsl_test_variable_env ): string {
			return `var ${test.value.name} = pm.environment.get("${test.value.value}");\n\n`
		}

		variable_range( test: $mrtest_dsl_test_variable_range ): string {
			return `var ${test.value.name} = {\n\tfrom: ${test.value.value.from},\n\tto: ${this.custom_stringify(test.value.value.to)}\n};\n\n`
		}

		variable_array_time( test: $mrtest_dsl_test_variable_array_time ): string {
			return `var ${test.value.name} = [\n\t${test.value.value.join(',\n\t')}\n];\n\n`
		}

		variable_time( test: $mrtest_dsl_test_variable_time ): string {
			return `var ${test.value.name} = {\n\tvalue_ms: ${test.value.value}\n};\n\n`
		}

		variable_array_string( test: $mrtest_dsl_test_variable_array_string ): string {
			return `var ${test.value.name} = [\n\t"${test.value.value.join('",\n\t"')}"\n];\n\n`
		}

		variable_validator( test: $mrtest_dsl_test_variable_validator ): string {
			return `var ${test.value.name} = {\n\tvalidator: ${test.value.value.name},\n\targs: ${this.custom_stringify(test.value.value.args)}\n};\n\n`
		}

		variable_object( test: $mrtest_dsl_test_variable_object ): string {
			return `var ${test.value.name} = ${this.custom_stringify(test.value.value, 0)};\n\n`
		}

		variable_array( test: $mrtest_dsl_test_variable_array ): string {
			return `var ${test.value.name} = ${this.custom_stringify(test.value.value, 0)};\n\n`
		}
	
		variable_array_check( test: $mrtest_dsl_test_variable_array_check ): string {
			return ``
		}

		variable_bool( test: $mrtest_dsl_test_variable_bool ): string {
			return `var ${test.value.name} = ${test.value.value};\n\n`
		}

		variable_rsl( test: $mrtest_dsl_test_variable_rsl ): string {
			return `var ${test.value.name} = ${this.custom_stringify(test.value.value, 0)};\n\n`
		}

		variable_string( test: $mrtest_dsl_test_variable_string ): string {
			return `var ${test.value.name} = "${test.value.value}";\n\n`
		}

		case( test: $mrtest_dsl_test_case ): string {
			return `if (pm.environment.get("${test.value}") == "+") {\t%%\n}\n\n`
		}

		status_eql_number( test: $mrtest_dsl_test_status_eql_number ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.eql(${test.value});\n});\n\n`
		}

		status_eql_variable_number( test: $mrtest_dsl_test_status_eql_variable_number ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.eql(${test.value});\n});\n\n`
		}

		status_eql_env( test: $mrtest_dsl_test_status_eql_env ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.eql(\n\t\tNumber(pm.environment.get("${test.value}"))\n\t);\n});\n\n`
		}

		status_eql_variable_env( test: $mrtest_dsl_test_status_eql_variable_env ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.eql(\n\t\tNumber(${test.value})\n\t);\n});\n\n`
		}

		status_noteql_number( test: $mrtest_dsl_test_status_noteql_number ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.not.eql(${test.value});\n});\n\n`
		}

		status_noteql_variable_number( test: $mrtest_dsl_test_status_noteql_variable_number ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.not.eql(${test.value});\n});\n\n`
		}

		status_noteql_env( test: $mrtest_dsl_test_status_noteql_env ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.not.eql(\n\t\tNumber(pm.environment.get("${test.value}"))\n\t);\n});\n\n`
		}

		status_noteql_variable_env( test: $mrtest_dsl_test_status_noteql_variable_env ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.not.eql(\n\t\tNumber(${test.value})\n\t);\n});\n\n`
		}

		status_gt_number( test: $mrtest_dsl_test_status_gt_number ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.at.above(${test.value});\n});\n\n`
		}

		status_gt_variable_number( test: $mrtest_dsl_test_status_gt_variable_number ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.at.above(${test.value});\n});\n\n`
		}

		status_gt_env( test: $mrtest_dsl_test_status_gt_env ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.at.above(\n\t\tNumber(pm.environment.get("${test.value}"))\n\t);\n});\n\n`
		}

		status_gt_variable_env( test: $mrtest_dsl_test_status_gt_variable_env ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.at.above(\n\t\tNumber(${test.value})\n\t);\n});\n\n`
		}

		status_gte_number( test: $mrtest_dsl_test_status_gte_number ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.at.least(${test.value});\n});\n\n`
		}

		status_gte_variable_number( test: $mrtest_dsl_test_status_gte_variable_number ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.at.least(${test.value});\n});\n\n`
		}

		status_gte_env( test: $mrtest_dsl_test_status_gte_env ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.at.least(\n\t\tNumber(pm.environment.get("${test.value}"))\n\t);\n});\n\n`
		}

		status_gte_variable_env( test: $mrtest_dsl_test_status_gte_variable_env ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.at.least(\n\t\tNumber(${test.value})\n\t);\n});\n\n`
		}

		status_lt_number( test: $mrtest_dsl_test_status_lt_number ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.at.below(${test.value});\n});\n\n`
		}

		status_lt_variable_number( test: $mrtest_dsl_test_status_lt_variable_number ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.at.below(${test.value});\n});\n\n`
		}

		status_lt_env( test: $mrtest_dsl_test_status_lt_env ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.at.below(\n\t\tNumber(pm.environment.get("${test.value}"))\n\t);\n});\n\n`
		}

		status_lt_variable_env( test: $mrtest_dsl_test_status_lt_variable_env ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.at.below(\n\t\tNumber(${test.value})\n\t);\n});\n\n`
		}

		status_lte_number( test: $mrtest_dsl_test_status_lte_number ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.at.most(${test.value});\n});\n\n`
		}

		status_lte_variable_number( test: $mrtest_dsl_test_status_lte_variable_number ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.at.most(${test.value});\n});\n\n`
		}

		status_lte_env( test: $mrtest_dsl_test_status_lte_env ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.at.most(\n\t\tNumber(pm.environment.get("${test.value}"))\n\t);\n});\n\n`
		}

		status_lte_variable_env( test: $mrtest_dsl_test_status_lte_variable_env ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.at.most(\n\t\tNumber(${test.value})\n\t);\n});\n\n`
		}

		status_in_array_number( test: $mrtest_dsl_test_status_in_array_number ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.oneOf([\n\t\t${test.value.join(', \n\t\t')}\n\t]);\n});\n\n`
		}

		status_in_variable_array_number( test: $mrtest_dsl_test_status_in_array_number ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.oneOf(${test.value});\n});\n\n`
		}

		status_in_array_env( test: $mrtest_dsl_test_status_in_array_env ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.oneOf([\n\t\t${test.value.map((v: string) => 'Number(pm.environment.get("'+v+'"))').join(', \n\t\t')}\n\t]);\n});\n\n`
		}

		status_in_variable_array_env( test: $mrtest_dsl_test_status_in_array_env ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.oneOf(\n\t\t${test.value}.map(Number)\n\t);\n});\n\n`
		}

		status_in_number( test: $mrtest_dsl_test_status_in_number ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.oneOf([${test.value}]);\n});\n\n`
		}

		status_in_variable_number( test: $mrtest_dsl_test_status_in_number ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.oneOf([${test.value}]);\n});\n\n`
		}

		status_in_number_masked( test: $mrtest_dsl_test_status_in_number_masked ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.within(${test.value.from}, ${test.value.to});\n});\n\n`
		}

		status_in_variable_number_masked( test: $mrtest_dsl_test_status_in_variable_number_masked ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.within(\n\t\t${test.value}.from,\n\t\t${test.value}.to\n\t);\n});\n\n`
		}

		status_in_env( test: $mrtest_dsl_test_status_in_env ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.oneOf([\n\t\tNumber(pm.environment.get("${test.value}"))\n\t]);\n});\n\n`
		}

		status_in_variable_env( test: $mrtest_dsl_test_status_in_env ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.oneOf([\n\t\tNumber(${test.value})\n\t]);\n});\n\n`
		}

		status_in_range( test: $mrtest_dsl_test_status_in_range ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.within(${test.value.from}, ${test.value.to});\n});\n\n`
		}

		status_in_variable_range( test: $mrtest_dsl_test_status_in_range ): string {
			return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.within(\n\t\t${test.value}.from,\n\t\t${test.value}.to\n\t);\n});\n\n`
		}

		status_is_validator( test: $mrtest_dsl_test_status_is_validator ): string {
			return `pm.test("[status]", function () {\n\t${test.value.name}(pm.response.code, ${this.custom_stringify(test.value.args)})\n});\n\n`
		}

		status_is_variable_validator( test: $mrtest_dsl_test_status_is_variable_validator ): string {
			return `pm.test("[status]", function () {\n\t${test.value}.validator(pm.response.code, ${test.value}.args)\n});\n\n`
		}

		execution_time_eql_time( test: $mrtest_dsl_test_execution_time_eql_time ): string {
			return `pm.test("[execution-time]", function () { \n\tpm.expect(pm.response.responseTime).to.eql(${test.value});\n});\n\n`
		}
	
		execution_time_eql_variable_time( test: $mrtest_dsl_test_execution_time_eql_variable_time ): string {
			return `pm.test("[execution-time]", function () { \n\tpm.expect(pm.response.responseTime).to.eql(\n\t\t${test.value}.value_ms\n\t);\n});\n\n`
		}

		execution_time_noteql_time( test: $mrtest_dsl_test_execution_time_noteql_time ): string {
			return `pm.test("[execution-time]", function () { \n\tpm.expect(pm.response.responseTime).to.not.eql(${test.value});\n});\n\n`
		}

		execution_time_noteql_variable_time( test: $mrtest_dsl_test_execution_time_noteql_variable_time ): string {
			return `pm.test("[execution-time]", function () { \n\tpm.expect(pm.response.responseTime).to.not.eql(\n\t\t${test.value}.value_ms\n\t);\n});\n\n`
		}

		execution_time_gt_time( test: $mrtest_dsl_test_execution_time_gt_time ): string {
			return `pm.test("[execution-time]", function () { \n\tpm.expect(pm.response.responseTime).to.be.at.above(${test.value});\n});\n\n`
		}

		execution_time_gt_variable_time( test: $mrtest_dsl_test_execution_time_gt_variable_time ): string {
			return `pm.test("[execution-time]", function () { \n\tpm.expect(pm.response.responseTime).to.be.at.above(\n\t\t${test.value}.value_ms\n\t);\n});\n\n`
		}

		execution_time_gte_time( test: $mrtest_dsl_test_execution_time_gte_time ): string {
			return `pm.test("[execution-time]", function () { \n\tpm.expect(pm.response.responseTime).to.be.at.least(${test.value});\n});\n\n`
		}

		execution_time_gte_variable_time( test: $mrtest_dsl_test_execution_time_gte_variable_time ): string {
			return `pm.test("[execution-time]", function () { \n\tpm.expect(pm.response.responseTime).to.be.at.least(\n\t\t${test.value}.value_ms\n\t);\n});\n\n`
		}

		execution_time_lt_time( test: $mrtest_dsl_test_execution_time_lt_time ): string {
			return `pm.test("[execution-time]", function () { \n\tpm.expect(pm.response.responseTime).to.be.at.below(${test.value});\n});\n\n`
		}

		execution_time_lt_variable_time( test: $mrtest_dsl_test_execution_time_lt_variable_time ): string {
			return `pm.test("[execution-time]", function () { \n\tpm.expect(pm.response.responseTime).to.be.at.below(\n\t\t${test.value}.value_ms\n\t);\n});\n\n`
		}

		execution_time_lte_time( test: $mrtest_dsl_test_execution_time_lte_time ): string {
			return `pm.test("[execution-time]", function () { \n\tpm.expect(pm.response.responseTime).to.be.at.most(${test.value});\n});\n\n`
		}

		execution_time_lte_variable_time( test: $mrtest_dsl_test_execution_time_lte_variable_time ): string {
			return `pm.test("[execution-time]", function () { \n\tpm.expect(pm.response.responseTime).to.be.at.most(\n\t\t${test.value}.value_ms\n\t);\n});\n\n`
		}

		execution_time_in_time_range( test: $mrtest_dsl_test_execution_time_in_time_range ): string {
			return `pm.test("[execution-time]", function () {\n\tpm.expect(pm.response.responseTime).to.be.within(${test.value.from}, ${test.value.to});\n});\n\n`
		}

		execution_time_in_variable_time_range( test: $mrtest_dsl_test_execution_time_in_variable_time_range ): string {
			return `pm.test("[execution-time]", function () {\n\tpm.expect(pm.response.responseTime).to.be.within(\n\t\t${test.value}.from_ms,\n\t\t${test.value}.to_ms\n\t);\n});\n\n`
		}

		execution_time_in_array_time( test: $mrtest_dsl_test_execution_time_in_array_time ): string {
			return `pm.test("[execution-time]", function () {\n\tpm.expect(pm.response.responseTime).to.be.oneOf([\n\t\t${test.value.join(', \n\t\t')}\n\t]);\n});\n\n`
		}

		execution_time_in_variable_array_time( test: $mrtest_dsl_test_execution_time_in_variable_array_time ): string {
			return `pm.test("[execution-time]", function () {\n\tpm.expect(pm.response.responseTime).to.be.oneOf(\n\t\t${test.value}\n\t);\n});\n\n`
		}

		execution_time_in_time( test: $mrtest_dsl_test_execution_time_in_time ): string {
			return `pm.test("[execution-time]", function () {\n\tpm.expect(pm.response.responseTime).to.be.oneOf([\n\t\t${test.value}\n\t]);\n});\n\n`
		}

		execution_time_in_variable_time( test: $mrtest_dsl_test_execution_time_in_variable_time ): string {
			return `pm.test("[execution-time]", function () { \n\tpm.expect(pm.response.responseTime).to.be.oneOf([\n\t\t${test.value}.value_ms\n\t]);\n});\n\n`
		}

		execution_time_is_validator( test: $mrtest_dsl_test_execution_time_is_validator ): string {
			return `pm.test("[execution-time]", function () {\n\t${test.value.name}(pm.response.responseTime, ${this.custom_stringify(test.value.args)})\n});\n\n`
		}

		execution_time_is_variable_validator( test: $mrtest_dsl_test_execution_time_is_variable_validator ): string {
			return `pm.test("[execution-time]", function () {\n\t${test.value}.validator(\n\t\tpm.response.responseTime,\n\t\t${test.value}.args\n\t)\n});\n\n`
		}

		headers_contains_string( test: $mrtest_dsl_test_headers_contains_string ): string {
			return `pm.test("[headers]", function () { \n\tpm.expect(pm.response).to.have.header("${test.value}");\n});\n\n`
		}

		headers_contains_variable_string( test: $mrtest_dsl_test_headers_contains_variable_string ): string {
			return `pm.test("[headers]", function () { \n\tpm.expect(pm.response).to.have.header(${test.value});\n});\n\n`
		}

		headers_contains_array_string( test: $mrtest_dsl_test_headers_contains_array_string ): string {
			let headers_tests: string[] = []

			test.value.forEach((header: string) => {
				headers_tests.push(
					`\tpm.expect(pm.response).to.have.header("${header}");\n`
				)
			})

			return `pm.test("[headers]", function () { \n${headers_tests.join('')}});\n\n`
		}

		headers_contains_variable_array_string( test: $mrtest_dsl_test_headers_contains_variable_array_string ): string {
			return `pm.test("[headers]", function () {\n\t${test.value}.forEach(header => {\n\t\tpm.expect(pm.response).to.have.header(header)\n\t}\n});\n\n`
		}

		headers_contains_array_check( test: $mrtest_dsl_test_headers_contains_array_check ): string {
			let headers_tests: string[] = []

			test.value.forEach((header: Check) => {
				switch (header.operator) {
					case $mrtest_operator_eql:
						if (header.number) {
							headers_tests.push(
								`\tpm.expect(\n\t\tNumber(pm.response.headers.get("${header.inspectee}"))\n\t).to.eql(${header.number});\n`
							)
						} else if (header.env) {
							headers_tests.push(
								`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.eql(\n\t\tpm.environment.get("${header.env}")\n\t);\n`
							)
						} else if (header.string) {
							headers_tests.push(
								`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.eql("${header.string}");\n`
							)
						} else if (header.variable) {
							headers_tests.push(
								`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.eql(${header.variable});\n`
							)
						} else {
							headers_tests.push(
								// @ts-ignore
								`\t// Не найдена проверка для этого типа с оператором ${header.operator.name}\n`
							)
						}
						break;
					case $mrtest_operator_noteql:
						if (header.number) {
							headers_tests.push(
								`\tpm.expect(\n\t\tNumber(pm.response.headers.get("${header.inspectee}"))\n\t).to.not.eql(${header.number});\n`
							)
						} else if (header.env) {
							headers_tests.push(
								`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.not.eql(\n\t\tpm.environment.get("${header.env}")\n\t);\n`
							)
						} else if (header.string) {
							headers_tests.push(
								`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.not.eql("${header.string}");\n`
							)
						} else if (header.variable) {
							headers_tests.push(
								`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.not.eql(${header.variable});\n`
							)
						} else {
							headers_tests.push(
								// @ts-ignore
								`\t// Не найдена проверка для этого типа с оператором ${header.operator.name}\n`
							)
						}
						break;
					case $mrtest_operator_gt:
						if (header.number) {
							headers_tests.push(
								`\tpm.expect(\n\t\tNumber(pm.response.headers.get("${header.inspectee}"))\n\t).to.be.at.above(${header.number});\n`
							)
						} else if (header.env) {
							headers_tests.push(
								`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.be.at.above(\n\t\tpm.environment.get("${header.env}")\n\t);\n`
							)
						} else if (header.variable) {
							headers_tests.push(
								`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.be.at.above(${header.variable});\n`
							)
						} else {
							headers_tests.push(
								// @ts-ignore
								`\t// Не найдена проверка для этого типа с оператором ${header.operator.name}\n`
							)
						}
						break;
					case $mrtest_operator_gte:
						if (header.number) {
							headers_tests.push(
								`\tpm.expect(\n\t\tNumber(pm.response.headers.get("${header.inspectee}"))\n\t).to.be.at.least(${header.number});\n`
							)
						} else if (header.env) {
							headers_tests.push(
								`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.be.at.least(\n\t\tpm.environment.get("${header.env}")\n\t);\n`
							)
						} else if (header.variable) {
							headers_tests.push(
								`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.be.at.least(${header.variable});\n`
							)
						} else {
							headers_tests.push(
								// @ts-ignore
								`\t// Не найдена проверка для этого типа с оператором ${header.operator.name}\n`
							)
						}
						break;
					case $mrtest_operator_lt:
						if (header.number) {
							headers_tests.push(
								`\tpm.expect(\n\t\tNumber(pm.response.headers.get("${header.inspectee}"))\n\t).to.be.at.below(${header.number});\n`
							)
						} else if (header.env) {
							headers_tests.push(
								`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.be.at.below(\n\t\tpm.environment.get("${header.env}")\n\t);\n`
							)
						} else if (header.variable) {
							headers_tests.push(
								`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.be.at.below(${header.variable});\n`
							)
						} else {
							headers_tests.push(
								// @ts-ignore
								`\t// Не найдена проверка для этого типа с оператором ${header.operator.name}\n`
							)
						}
						break;
					case $mrtest_operator_lte:
						if (header.number) {
							headers_tests.push(
								`\tpm.expect(\n\t\tNumber(pm.response.headers.get("${header.inspectee}"))\n\t).to.be.at.most(${header.number});\n`
							)
						} else if (header.env) {
							headers_tests.push(
								`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.be.at.most(\n\t\tpm.environment.get("${header.env}")\n\t);\n`
							)
						} else if (header.variable) {
							headers_tests.push(
								`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.be.at.most(${header.variable});\n`
							)
						} else {
							headers_tests.push(
								// @ts-ignore
								`\t// Не найдена проверка для этого типа с оператором ${header.operator.name}\n`
							)
						}
						break;
					case $mrtest_operator_in:
						if (header.array_number) {
							headers_tests.push(
								`\tpm.expect(\n\t\tNumber(pm.response.headers.get("${header.inspectee}"))\n\t).to.be.oneOf([\n\t\t${header.array_number.join(', \n\t\t')}\n\t]);\n`
							)
						} else if (header.array_env) {
							headers_tests.push(
								`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.be.oneOf([\n\t\t${header.array_env.map(v => 'pm.environment.get("'+v+'")').join(', \n\t\t')}\n\t]);\n`
							)
						} else if (header.number) {
							headers_tests.push(
								`\tpm.expect(\n\t\tNumber(pm.response.headers.get("${header.inspectee}"))\n\t).to.be.oneOf([\n\t\t${header.number}\n\t]);\n`
							)
						} else if (header.number_masked) {
							headers_tests.push(
								`\tpm.expect(\n\t\tNumber(pm.response.headers.get("${header.inspectee}"))\n\t).to.be.within(${header.number_masked.from}, ${header.number_masked.to});\n`
							)
						} else if (header.env) {
							headers_tests.push(
								`\tpm.expect(\n\t\tNumber(pm.response.headers.get("${header.inspectee}"))\n\t).to.be.oneOf([\n\t\tpm.environment.get("${header.env}")\n\t]);\n`
							)
						} else if (header.variable) {
							headers_tests.push(
								`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.be.oneOf(${header.variable});\n`
							)
						} else if (header.range) {
							headers_tests.push(
								`\tpm.expect(\n\t\tNumber(pm.response.headers.get("${header.inspectee}"))\n\t).to.be.within(${header.range.from}, ${header.range.to});\n`
							)
						} else if (header.array_string) {
							headers_tests.push(
								`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.be.oneOf([\n\t\t${header.array_string.map(v => '"' + v + '"').join(', \n\t\t')}\n\t]);\n`
							)
						} else if (header.string) {
							headers_tests.push(
								`\tpm.expect(\n\t\tNumber(pm.response.headers.get("${header.inspectee}"))\n\t).to.be.oneOf([\n\t\t"${header.string}"\n\t]);\n`
							)
						} else {
							headers_tests.push(
								// @ts-ignore
								`\t// Не найдена проверка для этого типа с оператором ${header.operator.name}\n`
							)
						}
						break;
					default:
						headers_tests.push(
							// @ts-ignore
							`\t// Не найдена проверка для оператора ${header.operator.name}\n`
						)
				}
			})

			return `pm.test("[headers]", function () {\n${headers_tests.join('')}})\n\n`
		}

		body_is_validator( test: $mrtest_dsl_test_body_is_validator ): string {
			return `pm.test("[body]", function () {\n\t${test.value.name}(pm.response.json(), ${this.custom_stringify(test.value.args)})\n});\n\n`
		}

		body_is_variable_validator( test: $mrtest_dsl_test_body_is_variable_validator ): string {
			return `pm.test("[body]", function () {\n\t${test.value}.validator(pm.response.json(), ${test.value}.args)\n});\n\n`
		}

		body_match_object( test: $mrtest_dsl_test_body_match_object ): string {
			return `pm.test("[body]", function () {\n\tpm.expect(pm.response).to.have.jsonSchema(\n\t\t${this.custom_stringify(test.value, 2)}\n\t);\n});\n\n`
		}

		body_match_variable_object( test: $mrtest_dsl_test_body_match_variable_object ): string {
			return `pm.test("[body]", function () {\n\tpm.expect(pm.response).to.have.jsonSchema(${test.value});\n});\n\n`
		}

		body_match_rsl( test: $mrtest_dsl_test_body_match_rsl ): string {
			return `pm.test("[body]", function () {\n\tpm.expect(pm.response).to.have.jsonSchema(\n\t\t${this.custom_stringify(test.value, 2)}\n\t);\n});\n\n`
		}

		body_match_variable_rsl( test: $mrtest_dsl_test_body_match_variable_rsl ): string {
			return `pm.test("[body]", function () {\n\tpm.expect(pm.response).to.have.jsonSchema(${test.value});\n});\n\n`
		}

		get_template( test: $mrtest_dsl_test ): string {
			return `pm.test("[get]", function () {\n\t%%\n});\n\n`
		}

		get_value_is_validator( test: $mrtest_dsl_test_get_value_is_validator ): string {
			return `${test.value.name}(test, ${this.custom_stringify(test.value.args)})\n`
		}

		get_value_is_variable_validator( test: $mrtest_dsl_test_get_value_is_variable_validator ): string {
			return `${test.value}.validator(test, ${test.value}.args)\n`
		}

		get_value_eql_number( test: $mrtest_dsl_test_get_value_eql_number ): string {
			return `pm.expect(Number(test)).to.be.eql(${test.value})\n`
		}

		get_value_eql_variable_number( test: $mrtest_dsl_test_get_value_eql_variable_number ): string {
			return `pm.expect(test).to.be.eql(${test.value})\n`
		}

		get_value_eql_bool( test: $mrtest_dsl_test_get_value_eql_bool ): string {
			return `pm.expect(test).to.be.eql(${test.value})\n`
		}

		get_value_eql_variable_bool( test: $mrtest_dsl_test_get_value_eql_variable_bool ): string {
			return `pm.expect(test).to.be.eql(${test.value})\n`
		}

		get_value_eql_string( test: $mrtest_dsl_test_get_value_eql_string ): string {
			return `pm.expect(test).to.be.eql("${test.value}")\n`
		}

		get_value_eql_variable_string( test: $mrtest_dsl_test_get_value_eql_variable_string ): string {
			return `pm.expect(test).to.be.eql(${test.value})\n`
		}

		get_value_eql_env( test: $mrtest_dsl_test_get_value_eql_env): string {
			return `pm.expect(test).to.be.eql(\n\t\tpm.environment.get("${test.value}")\n\t)\n`
		}

		get_value_eql_variable_env( test: $mrtest_dsl_test_get_value_eql_variable_env): string {
			return `pm.expect(test).to.be.eql(${test.value})\n`
		}

		get_value_noteql_number( test: $mrtest_dsl_test_get_value_noteql_number ): string {
			return `pm.expect(Number(test)).to.not.eql(${test.value})\n`
		}

		get_value_noteql_variable_number( test: $mrtest_dsl_test_get_value_noteql_variable_number ): string {
			return `pm.expect(Number(test)).to.not.eql(${test.value})\n`
		}

		get_value_noteql_bool( test: $mrtest_dsl_test_get_value_noteql_bool ): string {
			return `pm.expect(test).to.not.eql(${test.value})\n`
		}

		get_value_noteql_variable_bool( test: $mrtest_dsl_test_get_value_noteql_variable_bool ): string {
			return `pm.expect(test).to.not.eql(${test.value})\n`
		}

		get_value_noteql_string( test: $mrtest_dsl_test_get_value_noteql_string ): string {
			return `pm.expect(test).to.not.eql("${test.value}")\n`
		}

		get_value_noteql_variable_string( test: $mrtest_dsl_test_get_value_noteql_variable_string ): string {
			return `pm.expect(test).to.not.eql(${test.value})\n`
		}

		get_value_noteql_env( test: $mrtest_dsl_test_get_value_noteql_env): string {
			return `pm.expect(test).to.not.eql(\n\t\tpm.environment.get("${test.value}")\n\t)\n`
		}

		get_value_noteql_variable_env( test: $mrtest_dsl_test_get_value_noteql_variable_env): string {
			return `pm.expect(test).to.not.eql(${test.value})\n`
		}

		get_value_noteql_object( test: $mrtest_dsl_test_get_value_noteql_object ): string {
			return `pm.expect(test).to.not.eql(${this.custom_stringify(test.value)});\n`
		}

		get_value_noteql_variable_object( test: $mrtest_dsl_test_get_value_noteql_variable_object ): string {
			return `pm.expect(test).to.not.eql(${this.custom_stringify(test.value)});\n`
		}

		get_value_gt_number( test: $mrtest_dsl_test_get_value_gt_number ): string {
			return `pm.expect(Number(test)).to.be.at.above(${test.value})\n`
		}

		get_value_gt_variable_number( test: $mrtest_dsl_test_get_value_gt_variable_number ): string {
			return `pm.expect(Number(test)).to.be.at.above(${test.value})\n`
		}

		get_value_gte_number( test: $mrtest_dsl_test_get_value_gte_number ): string {
			return `pm.expect(Number(test)).to.be.at.least(${test.value})\n`
		}

		get_value_gte_variable_number( test: $mrtest_dsl_test_get_value_gte_variable_number ): string {
			return `pm.expect(Number(test)).to.be.at.least(${test.value})\n`
		}

		get_value_lt_number( test: $mrtest_dsl_test_get_value_lt_number ): string {
			return `pm.expect(Number(test)).to.be.at.below(${test.value})\n`
		}

		get_value_lt_variable_number( test: $mrtest_dsl_test_get_value_lt_variable_number ): string {
			return `pm.expect(Number(test)).to.be.at.below(${test.value})\n`
		}

		get_value_lte_number( test: $mrtest_dsl_test_get_value_lte_number ): string {
			return `pm.expect(Number(test)).to.be.at.most(${test.value})\n`
		}

		get_value_lte_variable_number( test: $mrtest_dsl_test_get_value_lte_variable_number ): string {
			return `pm.expect(Number(test)).to.be.at.most(${test.value})\n`
		}

		get_value_gt_env( test: $mrtest_dsl_test_get_value_gt_number ): string {
			return `pm.expect(Number(test)).to.be.at.above(\n\t\tNumber(pm.environment.get("${test.value}"))\n\t)\n`
		}

		get_value_gt_variable_env( test: $mrtest_dsl_test_get_value_gt_variable_number ): string {
			return `pm.expect(Number(test)).to.be.at.above(${test.value})\n`
		}

		get_value_gte_env( test: $mrtest_dsl_test_get_value_gte_number ): string {
			return `pm.expect(Number(test)).to.be.at.least(\n\t\tNumber(pm.environment.get("${test.value}"))\n\t)\n`
		}

		get_value_gte_variable_env( test: $mrtest_dsl_test_get_value_gte_variable_number ): string {
			return `pm.expect(Number(test)).to.be.at.least(${test.value})\n`
		}

		get_value_lt_env( test: $mrtest_dsl_test_get_value_lt_number ): string {
			return `pm.expect(Number(test)).to.be.at.below(\n\t\tNumber(pm.environment.get("${test.value}"))\n\t)\n`
		}

		get_value_lt_variable_env( test: $mrtest_dsl_test_get_value_lt_variable_number ): string {
			return `pm.expect(Number(test)).to.be.at.below(${test.value})\n`
		}

		get_value_lte_env( test: $mrtest_dsl_test_get_value_lte_number ): string {
			return `pm.expect(Number(test)).to.be.at.most(\n\t\tNumber(pm.environment.get("${test.value}"))\n\t)\n`
		}

		get_value_lte_variable_env( test: $mrtest_dsl_test_get_value_lte_variable_number ): string {
			return `pm.expect(Number(test)).to.be.at.most(${test.value})\n`
		}

		get_value_in_range( test: $mrtest_dsl_test_get_value_in_range ): string {
			return `pm.expect(Number(test)).to.be.within(${test.value.from}, ${test.value.to})\n`
		}

		get_value_in_variable_range( test: $mrtest_dsl_test_get_value_in_variable_range ): string {
			return `pm.expect(Number(test)).to.be.within(\n\t\t${test.value}.from,\n\t\t${test.value}.to\n\t)\n`
		}

		get_value_in_number_masked( test: $mrtest_dsl_test_get_value_in_number_masked ): string {
			return `pm.expect(Number(test)).to.be.within(${test.value.from}, ${test.value.to})\n`
		}

		get_value_in_variable_number_masked( test: $mrtest_dsl_test_get_value_in_variable_number_masked ): string {
			return `pm.expect(Number(test)).to.be.within(\n\t\t${test.value}.from,\n\t\t${test.value}.to\n\t)\n`
		}

		get_value_in_number( test: $mrtest_dsl_test_get_value_in_number ): string {
			return `pm.expect(Number(test)).to.be.oneOf([${test.value}]);\n`
		}

		get_value_in_variable_number( test: $mrtest_dsl_test_get_value_in_variable_number ): string {
			return `pm.expect(Number(test)).to.be.oneOf([${test.value}]);\n`
		}

		get_value_in_array_number( test: $mrtest_dsl_test_get_value_in_array_number ): string {
			return `pm.expect(Number(test)).to.be.oneOf([\n\t\t${test.value.join(', \n\t\t')}\n\t]);\n`
		}

		get_value_in_variable_array_number( test: $mrtest_dsl_test_get_value_in_variable_array_number ): string {
			return `pm.expect(Number(test)).to.be.oneOf(${test.value});\n`
		}

		get_value_in_string( test: $mrtest_dsl_test_get_value_in_string ): string {
			return `pm.expect(test).to.be.oneOf(["${test.value}"]);\n`
		}

		get_value_in_variable_string( test: $mrtest_dsl_test_get_value_in_variable_string ): string {
			return `pm.expect(test).to.be.oneOf([${test.value}]);\n`
		}

		get_value_in_array_string( test: $mrtest_dsl_test_get_value_in_array_string ): string {
			return `pm.expect(test).to.be.oneOf([\n\t\t"${test.value.join('", \n\t\t"')}"\n\t]);\n`
		}

		get_value_in_variable_array_string( test: $mrtest_dsl_test_get_value_in_variable_array_string ): string {
			return `pm.expect(test).to.be.oneOf(${test.value});\n`
		}

		get_value_in_env( test: $mrtest_dsl_test_get_value_in_env ): string {
			return `pm.expect(test).to.be.oneOf([\n\t\tpm.environment.get("${test.value}")\n\t]);\n`
		}

		get_value_in_variable_env( test: $mrtest_dsl_test_get_value_in_variable_env ): string {
			return `pm.expect(test).to.be.oneOf([${test.value}]);\n`
		}

		get_value_in_array_env( test: $mrtest_dsl_test_get_value_in_array_env ): string {
			return `pm.expect(test).to.be.oneOf([\n\t\tpm.environment.get("${test.value.join('"), \n\t\tpm.environment.get("')}")\n\t]);\n`
		}

		get_value_in_variable_array_env( test: $mrtest_dsl_test_get_value_in_variable_array_env ): string {
			return `pm.expect(test).to.be.oneOf(${test.value});\n`
		}

		get_object_eql_object( test: $mrtest_dsl_test_get_object_eql_object ): string {
			return `pm.expect(test).to.eql(${this.custom_stringify(test.value)});\n`
		}

		get_object_eql_variable_object( test: $mrtest_dsl_test_get_object_eql_variable_object ): string {
			return `pm.expect(test).to.eql(${test.value});\n`
		}

		get_object_noteql_object( test: $mrtest_dsl_test_get_object_eql_object ): string {
			return `pm.expect(test).to.not.eql(${this.custom_stringify(test.value)});\n`
		}

		get_object_noteql_variable_object( test: $mrtest_dsl_test_get_object_eql_variable_object ): string {
			return `pm.expect(test).to.not.eql(${test.value});\n`
		}

		get_object_is_validator( test: $mrtest_dsl_test_get_object_is_validator ): string {
			return `${test.value.name}(test, ${this.custom_stringify(test.value.args)})\n`
		}

		get_object_is_variable_validator( test: $mrtest_dsl_test_get_object_is_variable_validator ): string {
			return `${test.value}.validator(test, ${test.value}.args)\n`
		}

		get_object_contains_array_string( test: $mrtest_dsl_test_get_object_contains_array_string ): string {
			return `pm.expect(test).to.have.all.keys(\n\t\t"${test.value.join('",\n\t\t"')}"\n\t);\n`
		}

		get_object_contains_variable_array_string( test: $mrtest_dsl_test_get_object_contains_variable_array_string ): string {
			return `pm.expect(test).to.have.all.keys(...${test.value});\n`
		}

		get_object_contains_string( test: $mrtest_dsl_test_get_object_contains_string ): string {
			return `pm.expect(test).to.have.all.keys("${test.value}");\n`
		}

		get_object_contains_variable_string( test: $mrtest_dsl_test_get_object_contains_variable_string ): string {
			return `pm.expect(test).to.have.all.keys(${test.value});\n`
		}

		get_array_eql_array( test: $mrtest_dsl_test_get_array_eql_array): string {
			return `pm.expect(test).to.eql(${this.custom_stringify(test.value)});\n`
		}

		get_array_eql_variable_array( test: $mrtest_dsl_test_get_array_eql_variable_array): string {
			return `pm.expect(test).to.eql(${test.value});\n`
		}

		get_array_noteql_array( test: $mrtest_dsl_test_get_array_noteql_array): string {
			return `pm.expect(test).to.not.eql(${this.custom_stringify(test.value)});\n`
		}

		get_array_noteql_variable_array( test: $mrtest_dsl_test_get_array_noteql_variable_array): string {
			return `pm.expect(test).to.not.eql(${test.value});\n`
		}

		get_array_is_validator( test: $mrtest_dsl_test_get_array_is_validator): string {
			return `${test.value.name}(test, ${this.custom_stringify(test.value.args)})\n`
		}

		get_array_is_variable_validator( test: $mrtest_dsl_test_get_array_is_variable_validator): string {
			return `${test.value}.validator(test, ${test.value}.args)\n`
		}

		get_array_contains_number( test: $mrtest_dsl_test_get_array_contains_number ): string {
			return `pm.expect(test).to.deep.include(${test.value});\n`
		}

		get_array_contains_variable_number( test: $mrtest_dsl_test_get_array_contains_variable_number ): string {
			return `pm.expect(test).to.deep.include(${test.value});\n`
		}

		get_array_contains_string( test: $mrtest_dsl_test_get_array_contains_string ): string {
			return `pm.expect(test).to.deep.include("${test.value}");\n`
		}

		get_array_contains_variable_string( test: $mrtest_dsl_test_get_array_contains_variable_string ): string {
			return `pm.expect(test).to.deep.include(${test.value});\n`
		}

		get_array_contains_bool( test: $mrtest_dsl_test_get_array_contains_bool ): string {
			return `pm.expect(test).to.deep.include(${test.value});\n`
		}

		get_array_contains_variable_bool( test: $mrtest_dsl_test_get_array_contains_variable_bool ): string {
			return `pm.expect(test).to.deep.include(${test.value});\n`
		}

		get_array_contains_null( test: $mrtest_dsl_test_get_array_contains_null ): string {
			return `pm.expect(test).to.deep.include(${test.value});\n`
		}

		get_array_contains_variable_null( test: $mrtest_dsl_test_get_array_contains_variable_null ): string {
			return `pm.expect(test).to.deep.include(${test.value});\n`
		}

		get_array_contains_array( test: $mrtest_dsl_test_get_array_contains_array ): string {
			return `pm.expect(test).to.deep.include(${this.custom_stringify(test.value)});\n`
		}

		get_array_contains_variable_array( test: $mrtest_dsl_test_get_array_contains_variable_array ): string {
			return `pm.expect(test).to.deep.include(${test.value});\n`
		}

		get_array_contains_object( test: $mrtest_dsl_test_get_array_contains_object ): string {
			return `pm.expect(test).to.deep.include(${this.custom_stringify(test.value)});\n`
		}

		get_array_contains_variable_object( test: $mrtest_dsl_test_get_array_contains_variable_object ): string {
			return `pm.expect(test).to.deep.include(${test.value});\n`
		}

		get_array_contains_env( test: $mrtest_dsl_test_get_array_contains_env ): string {
			return `pm.expect(test).to.deep.include(\n\t\tpm.environment.get("${test.value}")\n\t);\n`
		}

		get_array_contains_variable_env( test: $mrtest_dsl_test_get_array_contains_variable_env ): string {
			return `pm.expect(test).to.deep.include(${test.value});\n`
		}
	}
}
