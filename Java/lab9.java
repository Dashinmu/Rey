import java.util.Scanner;

class Person_lab9{
    String name;
    int age;

    void Write(String name, int age){
        this.name = name;
        this.age = age;
    }

    void Display(){
        System.out.println(name+" "+age);
    }

}

class Empolyee extends Person_lab9{
    String position;
    double salary;

    void Write(String name, int age, String position, double salary){
        super.Write(name, age);
        this.position = position;
        this.salary = salary;
    }

    void Display(){
        super.Display();
        System.out.println(position+" "+salary*1.5);
    }

}

public class lab9 {
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);
        Empolyee emp = new Empolyee();
        String name, position;
        int age;
        double salary;
        name = in.next();
        age = in.nextInt();
        position = in.next();
        salary = in.nextDouble();
        emp.Write(name, age, position, salary);
        emp.Display();
    }
}
