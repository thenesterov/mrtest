namespace $.$$ {
	export class $mrtest_operator {}
	export class $mrtest_operator_eql extends $mrtest_operator {}
	export class $mrtest_operator_noteql extends $mrtest_operator {}
	export class $mrtest_operator_gt extends $mrtest_operator {}
	export class $mrtest_operator_gte extends $mrtest_operator {}
	export class $mrtest_operator_lt extends $mrtest_operator {}
	export class $mrtest_operator_lte extends $mrtest_operator {}
	export class $mrtest_operator_in extends $mrtest_operator {}
	export class $mrtest_operator_contains extends $mrtest_operator {}
	export class $mrtest_operator_is extends $mrtest_operator {}
	export class $mrtest_operator_match extends $mrtest_operator {}

	export const $mrtest_operators = {
		"==": $mrtest_operator_eql,
		"!=": $mrtest_operator_noteql,
		">": $mrtest_operator_gt,
		">=": $mrtest_operator_gte,
		"<": $mrtest_operator_lt,
		"<=": $mrtest_operator_lte,
		"in": $mrtest_operator_in,
		"contains": $mrtest_operator_contains,
		"is": $mrtest_operator_is,
		"match": $mrtest_operator_match,
	}
}
