import java.util.Scanner;

class Airplane_A{
    String name;

    void Write(String name) {
        this.name = name;
    }

    void Print(){
        System.out.println(name);
    }
}

class AirplaneType_A extends Airplane_A{
    String type;
    int number_class;

    void Write(String name, String type, int number_class){
        super.Write(name);
        this.type = type;
        this.number_class = number_class;
    }

    void Print(){
        super.Print();
        System.out.print(type+" "+number_class+" Class");
    }
}

class Seats extends AirplaneType_A{
    int num_seats;

    public Seats(){
        name = "Boing 776";
        this.type = "Passenger";
        this.number_class = 2;
        this.num_seats = 100;
    }

    public Seats(String name, String type, int number_class, int num_seats) {
        this.name = name;
        this.type = type;
        this.number_class = number_class;
        this.num_seats = num_seats;
    }

    void Write(String name, String type, int number_class, int num_seats){
        super.Write(name, type, number_class);
        this.num_seats = num_seats;
    }

    void Print(){
        super.Print();
        System.out.println(num_seats+" number of seats");
    }

}

public class Abstraction {
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);

        /*Passenger t1 = new Passenger();
        String usage;
        String status;
        String model;
        int speed;
        int cost;
        int cntPlaces;
        double weight;
        usage = in.next();
        status = in.next();
        model = in.next();
        speed = in.nextInt();
        cost = in.nextInt();
        cntPlaces = in.nextInt();
        weight = in.nextDouble();

        t1.Write(usage, status, model, speed, cost, cntPlaces, weight);
        Passenger t2 = new Passenger("б/у", "битая", "Camry", 205, 4000000, 4, 1750);

        t1.Display();
        t2.Display();

         */
    }
}
