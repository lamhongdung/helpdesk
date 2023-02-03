public class StudentBuilder {

    private Student student;

    public StudentBuilder() {
        student = new Student();
    }

    public StudentBuilder firstName(String firstName) {
        student.setFirstName(firstName);
        return this;
    }

    public StudentBuilder lastName(String lastName) {
        student.setLastName(lastName);
        return this;
    }

    public StudentBuilder middleName(String middleName) {
        student.setMiddleName(middleName);
        return this;
    }

    public StudentBuilder country(String country) {
        student.setCountry(country);
        return this;
    }

    public Student build() {
        return student;
    }
}