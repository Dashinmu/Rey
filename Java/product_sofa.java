import java.util.Scanner;

public class product_sofa {
    public static void main(String[] args) {
        product Sofa1 = new product();
        Sofa1.write("Sofa1","0101",10);
        Sofa1.display();
        product Sofa2 = new product();
        Sofa2.write("Sofa2","0102",5);
        Sofa2.display();
        product Sofa3 = new product();
        Sofa3.display();

        product Sofa4 = new product("Sofa4","0104",5);
        Sofa4.display();
        product Sofa5 = new product("Sofa5","0105",3);
        Sofa5.display();
        product Sofa6 = new product("Sofa6","0106",0);
        Sofa6.display();

        System.out.println();

        String nameM;
        String numberM;
        int amountM;

        product [] array = new product [3];
        for (int i = 0; i < 3; i++) {
            array[i] = new product();
            System.out.print("Enter Name, ID, Amount: ");
            Scanner in = new Scanner(System.in);
            nameM = in.next();
            numberM = in.next();
            amountM = in.nextInt();
            array[i].write(nameM, numberM, amountM);
        }

        for (int i = 0; i < 3; i++) {
            array[i].display();
        }
    }
}
