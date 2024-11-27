namespace $ {
	export class $mrtest_validator extends $hyoo_crus_entity.with({
		Source: $hyoo_crus_text
	}) {
		source( next?: string ) {
			return this.Source( next )?.value( next ) ?? null
		}
	}
}
