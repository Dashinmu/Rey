public class product {
    String name;
    String number;
    int amount;

    public product() {
        this.name = " ";
        this.number = " ";
        this.amount = 0;
    }

    public product(String nameP, String numberP, int amountP) {
        this.name = nameP;
        this.number = numberP;
        this.amount = amountP;
    }

    public void write(String nameW, String numberW, int amountW) {
        name = nameW;
        number = numberW;
        amount = amountW;
    }

    void display() {
        System.out.println("Name: " + this.name + " ID:" + this.number + " Amount = " + this.amount);
    }
}

