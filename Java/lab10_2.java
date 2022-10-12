import java.util.Scanner;

abstract class Student{
    String line;

    void Write(String line){
        this.line = line;
    }

    abstract void Display();


    /*abstract void WriteA();
    abstract void DisplayA();*/
}

abstract class Aspirant extends Student{
    int course;

    void Write(String line, int course){
        super.Write(line);
        this.course = course;
    }
}

class Person_lab10 extends Aspirant{
    String name;
    int age;

    void Person(){
        this.line = "";
        this.course = 0;
        this.name = "";
        this.age = 0;
    }

    void Person(String line, int course, String name, int age){
        this.line = line;
        this.course = course;
        this.name = name;
        this.age = age;
    }

    void Write(String line, int course, String name, int age){
        super.Write(line,course);
        this.name = name;
        this.age = age;
    }

    void Display() {
        System.out.println(this.line+" "+this.course+" course "+this.name+" "+this.age);
    }
}

public class lab10_2 {
    public static void main(String[] args){
        Person_lab10 s1 = new Person_lab10();
        s1.Write("POVT", 3, "Daniil", 20);
        s1.Display();
    }
}
