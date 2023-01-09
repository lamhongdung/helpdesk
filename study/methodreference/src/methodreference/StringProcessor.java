package methodreference;

@FunctionalInterface
public interface StringProcessor {

	public String process(String input);

    // Mọi class implement StringProcessor đều có thể gọi hàm này để sử dụng luôn
    public default void printf(Object t){
        System.out.println(t);
    }

    // Là hàm static, gọi từ class cũng được.         StringProcessor.concat(a,b)
    public static String concat(String a, String b){
        return a + b;
    }
}
