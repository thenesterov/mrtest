namespace $.$$ {
	export abstract class $mrtest_dsl_visitor {
		abstract variable_time_range(test: $mrtest_dsl_test_variable_time_range): string
		abstract variable_array_number(test: $mrtest_dsl_test_variable_array_number): string
		abstract variable_array_env(test: $mrtest_dsl_test_variable_array_env): string
		abstract variable_number(test: $mrtest_dsl_test_variable_number): string
		abstract variable_number_masked(test: $mrtest_dsl_test_variable_number_masked): string
		abstract variable_env(test: $mrtest_dsl_test_variable_env): string
		abstract variable_range(test: $mrtest_dsl_test_variable_range): string
		abstract variable_array_time(test: $mrtest_dsl_test_variable_array_time): string
		abstract variable_time(test: $mrtest_dsl_test_variable_time): string
		abstract variable_array_string(test: $mrtest_dsl_test_variable_array_string): string
		abstract variable_validator(test: $mrtest_dsl_test_variable_validator): string
		abstract variable_object(test: $mrtest_dsl_test_variable_object): string
		abstract variable_array(test: $mrtest_dsl_test_variable_array): string
		abstract variable_array_check(test: $mrtest_dsl_test_variable_array_check): string
		abstract variable_bool(test: $mrtest_dsl_test_variable_bool): string
		abstract variable_rsl(test: $mrtest_dsl_test_variable_rsl): string
		abstract variable_string(test: $mrtest_dsl_test_variable_string): string

		abstract case(test: $mrtest_dsl_test_case): string

		abstract status_eql_number(test: $mrtest_dsl_test_status_eql_number): string
		abstract status_eql_variable_number(test: $mrtest_dsl_test_status_eql_variable_number): string
		abstract status_eql_env(test: $mrtest_dsl_test_status_eql_env): string
		abstract status_eql_variable_env(test: $mrtest_dsl_test_status_eql_variable_env): string

		abstract status_noteql_number(test: $mrtest_dsl_test_status_noteql_number): string
		abstract status_noteql_variable_number(test: $mrtest_dsl_test_status_noteql_variable_number): string
		abstract status_noteql_env(test: $mrtest_dsl_test_status_noteql_env): string
		abstract status_noteql_variable_env(test: $mrtest_dsl_test_status_noteql_variable_env): string

		abstract status_gt_number(test: $mrtest_dsl_test_status_gt_number): string
		abstract status_gt_variable_number(test: $mrtest_dsl_test_status_gt_variable_number): string
		abstract status_gt_env(test: $mrtest_dsl_test_status_gt_env): string
		abstract status_gt_variable_env(test: $mrtest_dsl_test_status_gt_variable_env): string

		abstract status_gte_number(test: $mrtest_dsl_test_status_gte_number): string
		abstract status_gte_variable_number(test: $mrtest_dsl_test_status_gte_variable_number): string
		abstract status_gte_env(test: $mrtest_dsl_test_status_gte_env): string
		abstract status_gte_variable_env(test: $mrtest_dsl_test_status_gte_variable_env): string

		abstract status_lt_number(test: $mrtest_dsl_test_status_lt_number): string
		abstract status_lt_variable_number(test: $mrtest_dsl_test_status_lt_number): string
		abstract status_lt_env(test: $mrtest_dsl_test_status_lt_variable_env): string
		abstract status_lt_variable_env(test: $mrtest_dsl_test_status_lt_variable_env): string

		abstract status_lte_number(test: $mrtest_dsl_test_status_lte_number): string
		abstract status_lte_variable_number(test: $mrtest_dsl_test_status_lte_variable_number): string
		abstract status_lte_env(test: $mrtest_dsl_test_status_lte_env): string
		abstract status_lte_variable_env(test: $mrtest_dsl_test_status_lte_variable_env): string

		abstract status_in_array_number(test: $mrtest_dsl_test_status_in_array_number): string
		abstract status_in_variable_array_number(test: $mrtest_dsl_test_status_in_array_number): string
		abstract status_in_array_env(test: $mrtest_dsl_test_status_in_array_env): string
		abstract status_in_variable_array_env(test: $mrtest_dsl_test_status_in_variable_array_env): string
		abstract status_in_number(test: $mrtest_dsl_test_status_in_number): string
		abstract status_in_variable_number(test: $mrtest_dsl_test_status_in_variable_number): string
		abstract status_in_number_masked(test: $mrtest_dsl_test_status_in_number_masked): string
		abstract status_in_variable_number_masked(test: $mrtest_dsl_test_status_in_variable_number_masked): string
		abstract status_in_env(test: $mrtest_dsl_test_status_in_env): string
		abstract status_in_variable_env(test: $mrtest_dsl_test_status_in_variable_env): string
		abstract status_in_range(test: $mrtest_dsl_test_status_in_range): string
		abstract status_in_variable_range(test: $mrtest_dsl_test_status_in_variable_range): string

		abstract status_is_validator(test: $mrtest_dsl_test_status_is_validator): string
		abstract status_is_variable_validator(test: $mrtest_dsl_test_status_is_variable_validator): string

		abstract execution_time_eql_time(test: $mrtest_dsl_test_execution_time_eql_time): string
		abstract execution_time_eql_variable_time(test: $mrtest_dsl_test_execution_time_eql_variable_time): string
		abstract execution_time_noteql_time(test: $mrtest_dsl_test_execution_time_noteql_time): string
		abstract execution_time_noteql_variable_time(test: $mrtest_dsl_test_execution_time_noteql_variable_time): string
		abstract execution_time_gt_time(test: $mrtest_dsl_test_execution_time_gt_time): string
		abstract execution_time_gt_variable_time(test: $mrtest_dsl_test_execution_time_gt_variable_time): string
		abstract execution_time_gte_time(test: $mrtest_dsl_test_execution_time_gte_time): string
		abstract execution_time_gte_variable_time(test: $mrtest_dsl_test_execution_time_gte_variable_time): string
		abstract execution_time_lt_time(test: $mrtest_dsl_test_execution_time_lt_time): string
		abstract execution_time_lt_variable_time(test: $mrtest_dsl_test_execution_time_lt_variable_time): string
		abstract execution_time_lte_time(test: $mrtest_dsl_test_execution_time_lte_time): string
		abstract execution_time_lte_variable_time(test: $mrtest_dsl_test_execution_time_lte_variable_time): string
		abstract execution_time_in_time_range(test: $mrtest_dsl_test_execution_time_in_time_range): string
		abstract execution_time_in_variable_time_range(test: $mrtest_dsl_test_execution_time_in_variable_time_range): string
		abstract execution_time_in_array_time(test: $mrtest_dsl_test_execution_time_in_array_time): string
		abstract execution_time_in_variable_array_time(test: $mrtest_dsl_test_execution_time_in_variable_array_time): string
		abstract execution_time_in_time(test: $mrtest_dsl_test_execution_time_in_time): string
		abstract execution_time_in_variable_time(test: $mrtest_dsl_test_execution_time_in_variable_time): string
		abstract execution_time_is_validator(test: $mrtest_dsl_test_execution_time_is_validator): string
		abstract execution_time_is_variable_validator(test: $mrtest_dsl_test_execution_time_is_variable_validator): string

		abstract headers_contains_string(test: $mrtest_dsl_test_headers_contains_string): string
		abstract headers_contains_variable_string(test: $mrtest_dsl_test_headers_contains_variable_string): string
		abstract headers_contains_array_string(test: $mrtest_dsl_test_headers_contains_array_string): string
		abstract headers_contains_variable_array_string(test: $mrtest_dsl_test_headers_contains_variable_array_string): string
		abstract headers_contains_array_check(test: $mrtest_dsl_test_headers_contains_array_check): string
	
		abstract body_is_validator(test: $mrtest_dsl_test_body_is_validator): string
		abstract body_is_variable_validator(test: $mrtest_dsl_test_body_is_variable_validator): string
		abstract body_match_object(test: $mrtest_dsl_test_body_match_object): string
		abstract body_match_variable_object(test: $mrtest_dsl_test_body_match_variable_object): string
		abstract body_match_rsl(test: $mrtest_dsl_test_body_match_rsl): string
		abstract body_match_variable_rsl(test: $mrtest_dsl_test_body_match_variable_rsl): string

		abstract get_template(test: $mrtest_dsl_test): string

		abstract get_value_is_validator(test: $mrtest_dsl_test_get_value_is_validator): string
		abstract get_value_is_variable_validator(test: $mrtest_dsl_test_get_value_is_variable_validator): string

		abstract get_value_eql_number(test: $mrtest_dsl_test_get_value_eql_number): string
		abstract get_value_eql_variable_number(test: $mrtest_dsl_test_get_value_eql_variable_number): string
		abstract get_value_eql_bool(test: $mrtest_dsl_test_get_value_eql_bool): string
		abstract get_value_eql_variable_bool(test: $mrtest_dsl_test_get_value_eql_variable_bool): string
		abstract get_value_eql_string(test: $mrtest_dsl_test_get_value_eql_string): string
		abstract get_value_eql_variable_string(test: $mrtest_dsl_test_get_value_eql_variable_string): string
		abstract get_value_eql_env(test: $mrtest_dsl_test_get_value_eql_env): string
		abstract get_value_eql_variable_env(test: $mrtest_dsl_test_get_value_eql_variable_env): string

		abstract get_value_noteql_number(test: $mrtest_dsl_test_get_value_noteql_variable_number): string
		abstract get_value_noteql_variable_number(test: $mrtest_dsl_test_get_value_noteql_number): string
		abstract get_value_noteql_bool(test: $mrtest_dsl_test_get_value_noteql_bool): string
		abstract get_value_noteql_variable_bool(test: $mrtest_dsl_test_get_value_noteql_variable_bool): string
		abstract get_value_noteql_string(test: $mrtest_dsl_test_get_value_noteql_string): string
		abstract get_value_noteql_variable_string(test: $mrtest_dsl_test_get_value_noteql_variable_string): string
		abstract get_value_noteql_env(test: $mrtest_dsl_test_get_value_noteql_env): string
		abstract get_value_noteql_variable_env(test: $mrtest_dsl_test_get_value_noteql_variable_env): string
		abstract get_value_noteql_object(test: $mrtest_dsl_test_get_value_noteql_object): string
		abstract get_value_noteql_variable_object(test: $mrtest_dsl_test_get_value_noteql_variable_object): string

		abstract get_value_gt_number(test: $mrtest_dsl_test_get_value_gt_number): string
		abstract get_value_gt_variable_number(test: $mrtest_dsl_test_get_value_gt_variable_number): string
		abstract get_value_gt_env(test: $mrtest_dsl_test_get_value_gt_env): string
		abstract get_value_gt_variable_env(test: $mrtest_dsl_test_get_value_gt_variable_env): string

		abstract get_value_gte_number(test: $mrtest_dsl_test_get_value_gt_number): string
		abstract get_value_gte_variable_number(test: $mrtest_dsl_test_get_value_gt_variable_number): string
		abstract get_value_gte_env(test: $mrtest_dsl_test_get_value_gt_env): string
		abstract get_value_gte_variable_env(test: $mrtest_dsl_test_get_value_gt_variable_env): string

		abstract get_value_lt_number(test: $mrtest_dsl_test_get_value_lt_number): string
		abstract get_value_lt_variable_number(test: $mrtest_dsl_test_get_value_lt_variable_number): string
		abstract get_value_lt_env(test: $mrtest_dsl_test_get_value_lt_env): string
		abstract get_value_lt_variable_env(test: $mrtest_dsl_test_get_value_lt_variable_env): string

		abstract get_value_lte_number(test: $mrtest_dsl_test_get_value_lte_number): string
		abstract get_value_lte_variable_number(test: $mrtest_dsl_test_get_value_lte_variable_number): string
		abstract get_value_lte_env(test: $mrtest_dsl_test_get_value_lte_env): string
		abstract get_value_lte_variable_env(test: $mrtest_dsl_test_get_value_lte_variable_env): string

		abstract get_value_in_range(test: $mrtest_dsl_test_get_value_in_range): string
		abstract get_value_in_variable_range(test: $mrtest_dsl_test_get_value_in_variable_range): string
		abstract get_value_in_number_masked(test: $mrtest_dsl_test_get_value_in_number_masked): string
		abstract get_value_in_variable_number_masked(test: $mrtest_dsl_test_get_value_in_variable_number_masked): string
		abstract get_value_in_number(test: $mrtest_dsl_test_get_value_in_number): string
		abstract get_value_in_variable_number(test: $mrtest_dsl_test_get_value_in_variable_number): string
		abstract get_value_in_array_number(test: $mrtest_dsl_test_get_value_in_array_number): string
		abstract get_value_in_variable_array_number(test: $mrtest_dsl_test_get_value_in_variable_array_number): string
		abstract get_value_in_string(test: $mrtest_dsl_test_get_value_in_string): string
		abstract get_value_in_variable_string(test: $mrtest_dsl_test_get_value_in_variable_string): string
		abstract get_value_in_array_string(test: $mrtest_dsl_test_get_value_in_array_string): string
		abstract get_value_in_variable_array_string(test: $mrtest_dsl_test_get_value_in_variable_array_string): string
		abstract get_value_in_env(test: $mrtest_dsl_test_get_value_in_env): string
		abstract get_value_in_variable_env(test: $mrtest_dsl_test_get_value_in_variable_env): string
		abstract get_value_in_array_env(test: $mrtest_dsl_test_get_value_in_array_env): string
		abstract get_value_in_variable_array_env(test: $mrtest_dsl_test_get_value_in_variable_array_env): string

		abstract get_object_eql_object(test: $mrtest_dsl_test_get_object_eql_object): string
		abstract get_object_eql_variable_object(test: $mrtest_dsl_test_get_object_eql_variable_object): string
		abstract get_object_noteql_object(test: $mrtest_dsl_test_get_object_noteql_object): string
		abstract get_object_noteql_variable_object(test: $mrtest_dsl_test_get_object_noteql_variable_object): string
		abstract get_object_is_validator(test: $mrtest_dsl_test_get_object_is_validator): string
		abstract get_object_is_variable_validator(test: $mrtest_dsl_test_get_object_is_variable_validator): string
		abstract get_object_contains_array_string(test: $mrtest_dsl_test_get_object_contains_array_string): string
		abstract get_object_contains_variable_array_string(test: $mrtest_dsl_test_get_object_contains_variable_array_string): string
		abstract get_object_contains_string(test: $mrtest_dsl_test_get_object_contains_string): string
		abstract get_object_contains_variable_string(test: $mrtest_dsl_test_get_object_contains_variable_string): string

		abstract get_array_eql_array(test: $mrtest_dsl_test_get_array_eql_array): string
		abstract get_array_eql_variable_array(test: $mrtest_dsl_test_get_array_eql_variable_array): string
		abstract get_array_noteql_array(test: $mrtest_dsl_test_get_array_noteql_array): string
		abstract get_array_noteql_variable_array(test: $mrtest_dsl_test_get_array_noteql_variable_array): string
		abstract get_array_is_validator(test: $mrtest_dsl_test_get_array_is_validator): string
		abstract get_array_is_variable_validator(test: $mrtest_dsl_test_get_array_is_variable_validator): string
		abstract get_array_contains_array(test: $mrtest_dsl_test_get_array_contains_array): string
		abstract get_array_contains_variable_array(test: $mrtest_dsl_test_get_array_contains_variable_array): string
	}
}
