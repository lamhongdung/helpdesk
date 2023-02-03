public class Main {
    public static void main(String[] args) {
        Student student = new StudentBuilder()
                .firstName("Khanh")
                .middleName("Huu")
                .country("Viet Nam").lastName("lam")
                .build();

        System.out.printf(student.toString());
    }
}
