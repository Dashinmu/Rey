import java.util.*;
import static java.lang.Math.*;

public class Main {
    //First task
    /*
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);
        System.out.println("Введите имена двух девочек");
        String firstGirl = in.next();
        String secondGirl = in.next();
        System.out.println("Введите их год рождения");
        int firstAge = in.nextInt();
        int secondAge = in.nextInt();

        if (firstAge > secondAge) {
            System.out.println(secondGirl);
        }
        else if (secondAge > firstAge){
            System.out.println(firstGirl);
        }
        else {
            System.out.println("Родились в один год");
        }
    }
*/

    //Second task
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);
        System.out.println("Введите 2 числа");
        int X = in.nextInt();
        int Y = in.nextInt();
        if ((X < 0 && Y > 0) || (X > 0 && Y < 0)){
            int resultX = X*Y;
            int resultY = abs(X)-abs(Y);
            System.out.println(resultX+" "+resultY);
        }
        else {
            int resultY = X*Y;
            int resultX = abs(X)-abs(Y);
            System.out.println(resultX+" "+resultY);
        }
    }
}
