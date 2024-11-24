namespace $.$$ {
	export class $mrtest_person_page extends $.$mrtest_person_page {
		
		override id() {
			return this.person().ref().description!
		}
		
		override key() {
			return this.person().land().key()?.toString() ?? ''
		}
		
	}
}
