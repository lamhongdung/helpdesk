package methodreference;

public class Study {

	public static String getStr(String input, StringProcessor processor){
	    return processor.process(input);
	}
}
