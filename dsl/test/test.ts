namespace $.$$ {
	export abstract class $mrtest_dsl_test {
		value: any

		constructor(value: any) {
			this.value = value
		}

		abstract accept(v: $mrtest_dsl_visitor): string
	}

	export class $mrtest_dsl_test_variable_time_range extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.variable_time_range(this)
		}
	}

	export class $mrtest_dsl_test_variable_array_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.variable_array_number(this)
		}
	}

	export class $mrtest_dsl_test_variable_array_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.variable_array_env(this)
		}
	}

	export class $mrtest_dsl_test_variable_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.variable_number(this)
		}
	}

	export class $mrtest_dsl_test_variable_number_masked extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.variable_number_masked(this)
		}
	}

	export class $mrtest_dsl_test_variable_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.variable_env(this)
		}
	}

	export class $mrtest_dsl_test_variable_range extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.variable_range(this)
		}
	}

	export class $mrtest_dsl_test_variable_array_time extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.variable_array_time(this)
		}
	}

	export class $mrtest_dsl_test_variable_time extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.variable_time(this)
		}
	}

	export class $mrtest_dsl_test_variable_array_string extends $mrtest_dsl_test {
        accept( v: $mrtest_dsl_visitor ): string {
            return v.variable_array_string(this)
        }
	}

	export class $mrtest_dsl_test_variable_validator extends $mrtest_dsl_test {
        accept( v: $mrtest_dsl_visitor ): string {
            return v.variable_validator(this)
        }
	}

	export class $mrtest_dsl_test_variable_object extends $mrtest_dsl_test {
        accept( v: $mrtest_dsl_visitor ): string {
            return v.variable_object(this)
        }
	}

	export class $mrtest_dsl_test_variable_array extends $mrtest_dsl_test {
        accept( v: $mrtest_dsl_visitor ): string {
            return v.variable_array(this)
        }
	}

	export class $mrtest_dsl_test_variable_array_check extends $mrtest_dsl_test {
        accept( v: $mrtest_dsl_visitor ): string {
            return v.variable_array_check(this)
        }
	}

	export class $mrtest_dsl_test_variable_bool extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.variable_bool(this)
		}
	}

	export class $mrtest_dsl_test_variable_rsl extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.variable_rsl(this);
		}
	}

	export class $mrtest_dsl_test_variable_string extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.variable_string(this);
		}
	}

	export class $mrtest_dsl_test_case extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.case(this)
		}
	}

	export class $mrtest_dsl_test_status_eql_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_eql_number(this)
		}
	};

	export class $mrtest_dsl_test_status_eql_variable_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_eql_variable_number(this)
		}
	}

	export class $mrtest_dsl_test_status_eql_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_eql_env(this)
		}
	};

	export class $mrtest_dsl_test_status_eql_variable_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_eql_variable_env(this)
		}
	};

	export class $mrtest_dsl_test_status_noteql_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_noteql_number(this)
		}
	};

	export class $mrtest_dsl_test_status_noteql_variable_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_noteql_variable_number(this)
		}
	}

	export class $mrtest_dsl_test_status_noteql_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_noteql_env(this)
		}
	};

	export class $mrtest_dsl_test_status_noteql_variable_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_noteql_variable_env(this)
		}
	};

	export class $mrtest_dsl_test_status_gt_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_gt_number(this)
		}
	};

	export class $mrtest_dsl_test_status_gt_variable_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_gt_variable_number(this)
		}
	};

	export class $mrtest_dsl_test_status_gt_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_gt_env(this)
		}
	};

	export class $mrtest_dsl_test_status_gt_variable_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_gt_variable_env(this)
		}
	};

	export class $mrtest_dsl_test_status_gte_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_gte_number(this)
		}
	};

	export class $mrtest_dsl_test_status_gte_variable_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_gte_variable_number(this)
		}
	};

	export class $mrtest_dsl_test_status_gte_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_gte_env(this)
		}
	};

	export class $mrtest_dsl_test_status_gte_variable_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_gte_variable_env(this)
		}
	};

	export class $mrtest_dsl_test_status_lt_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_lt_number(this)
		}
	};

	export class $mrtest_dsl_test_status_lt_variable_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_lt_variable_number(this)
		}
	};

	export class $mrtest_dsl_test_status_lt_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_lt_env(this)
		}
	};

	export class $mrtest_dsl_test_status_lt_variable_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_lt_variable_env(this)
		}
	};

	export class $mrtest_dsl_test_status_lte_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_lte_number(this)
		}
	};

	export class $mrtest_dsl_test_status_lte_variable_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_lte_variable_number(this)
		}
	};

	export class $mrtest_dsl_test_status_lte_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_lte_env(this)
		}
	};

	export class $mrtest_dsl_test_status_lte_variable_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_lte_variable_env(this)
		}
	};

	export class $mrtest_dsl_test_status_in_array_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_in_array_number(this)
		}
	}

	export class $mrtest_dsl_test_status_in_variable_array_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_in_variable_array_number(this)
		}
	}

	export class $mrtest_dsl_test_status_in_array_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_in_array_env(this)
		}
	}

	export class $mrtest_dsl_test_status_in_variable_array_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_in_variable_array_env(this)
		}
	}

	export class $mrtest_dsl_test_status_in_variable_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_in_variable_number(this)
		}
	}

	export class $mrtest_dsl_test_status_in_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_in_number(this)
		}
	};

	export class $mrtest_dsl_test_status_in_number_masked extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_in_number_masked(this)
		}
	};

	export class $mrtest_dsl_test_status_in_variable_number_masked extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_in_variable_number_masked(this)
		}
	};

	export class $mrtest_dsl_test_status_in_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_in_env(this)
		}
	};

	export class $mrtest_dsl_test_status_in_variable_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_in_variable_env(this)
		}
	};

	export class $mrtest_dsl_test_status_in_range extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_in_range(this)
		}
	};

	export class $mrtest_dsl_test_status_in_variable_range extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_in_variable_range(this)
		}
	};

	export class $mrtest_dsl_test_status_is_validator extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_is_validator(this)
		}
	}

	export class $mrtest_dsl_test_status_is_variable_validator extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.status_is_variable_validator(this)
		}
	}

	export class $mrtest_dsl_test_execution_time_eql_time extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.execution_time_eql_time(this)
		}
	}

	export class $mrtest_dsl_test_execution_time_eql_variable_time extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.execution_time_eql_variable_time(this)
		}
	}

	export class $mrtest_dsl_test_execution_time_noteql_time extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.execution_time_noteql_time(this)
		}
	}

	export class $mrtest_dsl_test_execution_time_noteql_variable_time extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.execution_time_noteql_variable_time(this)
		}
	}

	export class $mrtest_dsl_test_execution_time_gt_time extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.execution_time_gt_time(this)
		}
	}

	export class $mrtest_dsl_test_execution_time_gt_variable_time extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.execution_time_gt_variable_time(this)
		}
	}

	export class $mrtest_dsl_test_execution_time_gte_time extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.execution_time_gte_time(this)
		}
	}

	export class $mrtest_dsl_test_execution_time_gte_variable_time extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.execution_time_gte_variable_time(this)
		}
	}

	export class $mrtest_dsl_test_execution_time_lt_time extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.execution_time_lt_time(this)
		}
	}

	export class $mrtest_dsl_test_execution_time_lt_variable_time extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.execution_time_lt_variable_time(this)
		}
	}

	export class $mrtest_dsl_test_execution_time_lte_time extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.execution_time_lte_time(this)
		}
	}

	export class $mrtest_dsl_test_execution_time_lte_variable_time extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.execution_time_lte_variable_time(this)
		}
	}

	export class $mrtest_dsl_test_execution_time_in_time_range extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.execution_time_in_time_range(this)
		}
	}

	export class $mrtest_dsl_test_execution_time_in_variable_time_range extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.execution_time_in_variable_time_range(this)
		}
	}

	export class $mrtest_dsl_test_execution_time_in_array_time extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.execution_time_in_array_time(this)
		}
	}

	export class $mrtest_dsl_test_execution_time_in_variable_array_time extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.execution_time_in_variable_array_time(this)
		}
	}

	export class $mrtest_dsl_test_execution_time_in_time extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.execution_time_in_time(this)
		}
	}

	export class $mrtest_dsl_test_execution_time_in_variable_time extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.execution_time_in_variable_time(this)
		}
	}

	export class $mrtest_dsl_test_execution_time_is_validator extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.execution_time_is_validator(this)
		}
	}

	export class $mrtest_dsl_test_execution_time_is_variable_validator extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.execution_time_is_variable_validator(this)
		}
	}

	export class $mrtest_dsl_test_headers_contains_string extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.headers_contains_string(this)
		}
	}

	export class $mrtest_dsl_test_headers_contains_variable_string extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.headers_contains_variable_string(this)
		}
	}

	export class $mrtest_dsl_test_headers_contains_array_string extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.headers_contains_array_string(this)
		}
	}

	export class $mrtest_dsl_test_headers_contains_variable_array_string extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.headers_contains_variable_array_string(this)
		}
	}

	export class $mrtest_dsl_test_headers_contains_array_check extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.headers_contains_array_check(this)
		}
	}

	export class $mrtest_dsl_test_body_is_validator extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.body_is_validator(this)
		}
	}

	export class $mrtest_dsl_test_body_is_variable_validator extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.body_is_variable_validator(this)
		}
	}

	export class $mrtest_dsl_test_body_match_object extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.body_match_object(this)
		}
	}

	export class $mrtest_dsl_test_body_match_variable_object extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.body_match_variable_object(this)
		}
	}

	export class $mrtest_dsl_test_body_match_rsl extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.body_match_rsl(this)
		}
	}

	export class $mrtest_dsl_test_body_match_variable_rsl extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.body_match_variable_rsl(this)
		}
	}

	export class $mrtest_dsl_test_get_value_is_validator extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_is_validator(this)
		}
	}

	export class $mrtest_dsl_test_get_value_is_variable_validator extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_is_variable_validator(this)
		}
	}

	export class $mrtest_dsl_test_get_value_eql_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_eql_number(this)
		}
	}

	export class $mrtest_dsl_test_get_value_eql_variable_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_eql_variable_number(this)
		}
	}

	export class $mrtest_dsl_test_get_value_eql_bool extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_eql_bool(this)
		}
	}

	export class $mrtest_dsl_test_get_value_eql_variable_bool extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_eql_variable_bool(this)
		}
	}

	export class $mrtest_dsl_test_get_value_eql_string extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_eql_string(this)
		}
	}

	export class $mrtest_dsl_test_get_value_eql_variable_string extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_eql_variable_string(this)
		}
	}

	export class $mrtest_dsl_test_get_value_eql_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_eql_env(this)
		}
	}

	export class $mrtest_dsl_test_get_value_eql_variable_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_eql_variable_env(this)
		}
	}

	export class $mrtest_dsl_test_get_value_noteql_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_noteql_number(this)
		}
	}

	export class $mrtest_dsl_test_get_value_noteql_variable_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_noteql_variable_number(this)
		}
	}

	export class $mrtest_dsl_test_get_value_noteql_bool extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_noteql_bool(this)
		}
	}

	export class $mrtest_dsl_test_get_value_noteql_variable_bool extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_noteql_variable_bool(this)
		}
	}

	export class $mrtest_dsl_test_get_value_noteql_string extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_noteql_string(this)
		}
	}

	export class $mrtest_dsl_test_get_value_noteql_variable_string extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_noteql_variable_string(this)
		}
	}

	export class $mrtest_dsl_test_get_value_noteql_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_noteql_env(this)
		}
	}

	export class $mrtest_dsl_test_get_value_noteql_variable_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_noteql_variable_env(this)
		}
	}

	export class $mrtest_dsl_test_get_value_noteql_object extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_noteql_object(this)
		}
	}

	export class $mrtest_dsl_test_get_value_noteql_variable_object extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_noteql_variable_object(this)
		}
	}

	export class $mrtest_dsl_test_get_value_gt_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_gt_number(this)
		}
	}

	export class $mrtest_dsl_test_get_value_gt_variable_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_gt_variable_number(this)
		}
	}

	export class $mrtest_dsl_test_get_value_gte_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_gte_number(this)
		}
	}

	export class $mrtest_dsl_test_get_value_gte_variable_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_gte_variable_number(this)
		}
	}

	export class $mrtest_dsl_test_get_value_lt_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_lt_number(this)
		}
	}

	export class $mrtest_dsl_test_get_value_lt_variable_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_lt_variable_number(this)
		}
	}

	export class $mrtest_dsl_test_get_value_lte_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_lte_number(this)
		}
	}

	export class $mrtest_dsl_test_get_value_lte_variable_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_lte_variable_number(this)
		}
	}

	export class $mrtest_dsl_test_get_value_gt_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_gt_env(this)
		}
	}

	export class $mrtest_dsl_test_get_value_gt_variable_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_gt_variable_env(this)
		}
	}

	export class $mrtest_dsl_test_get_value_gte_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_gte_env(this)
		}
	}

	export class $mrtest_dsl_test_get_value_gte_variable_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_gte_variable_env(this)
		}
	}

	export class $mrtest_dsl_test_get_value_lt_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_lt_env(this)
		}
	}

	export class $mrtest_dsl_test_get_value_lt_variable_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_lt_variable_env(this)
		}
	}

	export class $mrtest_dsl_test_get_value_lte_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_lte_env(this)
		}
	}

	export class $mrtest_dsl_test_get_value_lte_variable_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_lte_variable_env(this)
		}
	}

	export class $mrtest_dsl_test_get_value_in_range extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_in_range(this)
		}
	}

	export class $mrtest_dsl_test_get_value_in_variable_range extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_in_variable_range(this)
		}
	}

	export class $mrtest_dsl_test_get_value_in_number_masked extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_in_number_masked(this)
		}
	}

	export class $mrtest_dsl_test_get_value_in_variable_number_masked extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_in_variable_number_masked(this)
		}
	}

	export class $mrtest_dsl_test_get_value_in_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_in_number(this)
		}
	}
	
	export class $mrtest_dsl_test_get_value_in_variable_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_in_variable_number(this)
		}
	}

	export class $mrtest_dsl_test_get_value_in_array_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_in_array_number(this)
		}
	}

	export class $mrtest_dsl_test_get_value_in_variable_array_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_in_variable_array_number(this)
		}
	}

	export class $mrtest_dsl_test_get_value_in_string extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_in_string(this)
		}
	}

	export class $mrtest_dsl_test_get_value_in_variable_string extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_in_variable_string(this)
		}
	}

	export class $mrtest_dsl_test_get_value_in_array_string extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_in_array_string(this)
		}
	}

	export class $mrtest_dsl_test_get_value_in_variable_array_string extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_in_variable_array_string(this)
		}
	}

	export class $mrtest_dsl_test_get_value_in_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_in_env(this)
		}
	}

	export class $mrtest_dsl_test_get_value_in_variable_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_in_variable_env(this)
		}
	}

	export class $mrtest_dsl_test_get_value_in_array_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_in_array_env(this)
		}
	}
	
	export class $mrtest_dsl_test_get_value_in_variable_array_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_value_in_variable_array_env(this)
		}
	}

	export class $mrtest_dsl_test_get_object_eql_object extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_object_eql_object(this)
		}
	}

	export class $mrtest_dsl_test_get_object_eql_variable_object extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_object_eql_variable_object(this)
		}
	}

	export class $mrtest_dsl_test_get_object_noteql_object extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_object_noteql_object(this)
		}
	}

	export class $mrtest_dsl_test_get_object_noteql_variable_object extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_object_noteql_variable_object(this)
		}
	}

	export class $mrtest_dsl_test_get_object_is_validator extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_object_is_validator(this)
		}
	}

	export class $mrtest_dsl_test_get_object_is_variable_validator extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_object_is_variable_validator(this)
		}
	}

	export class $mrtest_dsl_test_get_object_contains_string extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_object_contains_string(this)
		}
	}

	export class $mrtest_dsl_test_get_object_contains_variable_string extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_object_contains_variable_string(this)
		}
	}

	export class $mrtest_dsl_test_get_object_contains_array_string extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_object_contains_array_string(this)
		}
	}

	export class $mrtest_dsl_test_get_object_contains_variable_array_string extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_object_contains_variable_array_string(this)
		}
	}

	export class $mrtest_dsl_test_get_array_eql_array extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_array_eql_array(this)
		}
	}

	export class $mrtest_dsl_test_get_array_eql_variable_array extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_array_eql_variable_array(this)
		}
	}

	export class $mrtest_dsl_test_get_array_noteql_array extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_array_noteql_array(this)
		}
	}

	export class $mrtest_dsl_test_get_array_noteql_variable_array extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_array_noteql_variable_array(this)
		}
	}

	export class $mrtest_dsl_test_get_array_is_validator extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_array_is_validator(this)
		}
	}

	export class $mrtest_dsl_test_get_array_is_variable_validator extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_array_is_variable_validator(this)
		}
	}

	export class $mrtest_dsl_test_get_array_contains_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_array_contains_number(this)
		}
	}

	export class $mrtest_dsl_test_get_array_contains_variable_number extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_array_contains_variable_number(this)
		}
	}

	export class $mrtest_dsl_test_get_array_contains_string extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_array_contains_string(this)
		}
	}

	export class $mrtest_dsl_test_get_array_contains_variable_string extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_array_contains_variable_string(this)
		}
	}

	export class $mrtest_dsl_test_get_array_contains_bool extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_array_contains_bool(this)
		}
	}

	export class $mrtest_dsl_test_get_array_contains_variable_bool extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_array_contains_variable_bool(this)
		}
	}

	export class $mrtest_dsl_test_get_array_contains_null extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_array_contains_null(this)
		}
	}

	export class $mrtest_dsl_test_get_array_contains_variable_null extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_array_contains_variable_null(this)
		}
	}

	export class $mrtest_dsl_test_get_array_contains_array extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_array_contains_array(this)
		}
	}

	export class $mrtest_dsl_test_get_array_contains_variable_array extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_array_contains_variable_array(this)
		}
	}

	export class $mrtest_dsl_test_get_array_contains_object extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_array_contains_object(this)
		}
	}

	export class $mrtest_dsl_test_get_array_contains_variable_object extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_array_contains_variable_object(this)
		}
	}

	export class $mrtest_dsl_test_get_array_contains_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_array_contains_env(this)
		}
	}

	export class $mrtest_dsl_test_get_array_contains_variable_env extends $mrtest_dsl_test {
		accept( v: $mrtest_dsl_visitor ): string {
			return v.get_array_contains_variable_env(this)
		}
	}
}
