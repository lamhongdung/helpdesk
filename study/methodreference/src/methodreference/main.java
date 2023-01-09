package methodreference;

public class main {

	public static void main(String[] args) {
//	    // In ra chữ hoa
//	    System.out.println(Study.getStr("Hello Loda!", new StringProcessor() {
//	        @Override
//	        public String process(String input) {
//	            return input.toUpperCase();
//	        }
//	    }));
//
//	    // In ra chữ thường
//	    System.out.println(Study.getStr("Hey Loda!", new StringProcessor() {
//	        @Override
//	        public String process(String input) {
//	            return input.toLowerCase();
//	        }
//	    }));
		
		System.out.println(Study.getStr("Hello Loda!", String::toUpperCase));
		System.out.println(Study.getStr("Hello Loda!", input -> input.toLowerCase()));
	    
		
	}

}


