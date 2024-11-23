namespace $ {
	export class $mrtest_test extends $hyoo_crus_entity.with({
		Source: $hyoo_crus_text
	}) {
		source( next?: string ) {
			return this.Source( next )?.value( next ) ?? null
		}
	}
}
