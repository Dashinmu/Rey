import java.util.Scanner;

class Cars{
    String usage;
    String status;

    void Write(String usage, String status){
        this.usage = usage;
        this.status = status;
    }

    void Display(){
        System.out.print(usage+" "+status+" ");
    }
}

class Toyota extends Cars{
    String model;
    int speed;
    int cost;

    void Write(String usage, String status, String model, int speed, int cost){
        super.Write(usage, status);
        this.model = model;
        this.speed = speed;
        this.cost = cost;
    }

    void Display(){
        super.Display();
        System.out.print(model+" "+speed+" "+cost+" ");
    }
}

class Passenger extends Toyota{
    int cntPlaces;
    double weight;

    public Passenger(){
        usage = "не б/у";
        status = "не битая";
        this.model = "";
        this.speed = 0;
        this.cost = 0;
        this.cntPlaces = 4;
        this.weight = 1000;
    }

    public Passenger(String usage, String status, String model, int speed, int cost, int cntPlaces, double weight) {
        this.usage = usage;
        this.status = status;
        this.model = model;
        this.speed = speed;
        this.cost = cost;
        this.cntPlaces = cntPlaces;
        this.weight = weight;
    }

    void Write(String usage, String status, String model, int speed, int cost, int cntPlaces, double weight){
        super.Write(usage, status, model, speed, cost);
        this.cntPlaces = cntPlaces;
        this.weight = weight;
    }

    void Display(){
        super.Display();
        System.out.println(cntPlaces+" "+weight);
    }

}

public class lab9_2 {
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);
        Passenger t1 = new Passenger();
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
    }
}
