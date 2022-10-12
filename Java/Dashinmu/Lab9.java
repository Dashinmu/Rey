package Dashinmu;

import java.util.Scanner;

class Airplane{
    String name;
    String type;
    int number_class;

    void Write(String name, String type, int number_class){
        this.name = name;
        this.type = type;
        this.number_class = number_class;
    }

    void Print(){
        System.out.println(name + " " + type + " " + number_class + " Class");
    }

}

class AirplaneInfo extends Airplane{
    int seats;

    void Write(String name, String type, int number_class, int seats){
        super.Write(name, type, number_class);
        this.seats = seats;
    }

    void Print(){
        super.Print();
        System.out.println(seats + " number of seats");
    }

}

public class Lab9 {
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);
        //Airplane Boing = new Airplane();
        AirplaneInfo Boing = new AirplaneInfo();
        String name, type;
        int number_class, seats;
        name = in.nextLine();
        type = in.next();
        number_class = in.nextInt();
        seats = in.nextInt();
        Boing.Write(name, type, number_class, seats);
        Boing.Print();
    }
}
