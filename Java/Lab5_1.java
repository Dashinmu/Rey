import java.util.Random;
import java.util.Scanner;
import static java.lang.Math.random;

public class Lab5_1 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Введите кол-во элементов");
        int n = in.nextInt();
        Random r = new Random();
        int x[] = new int[n];
        int i = 0;

        //Заполнение
        for (i = 0; i < n; i++) {
            x[i] = r.nextInt(99) + 1;
            System.out.print(x[i] + " ");
        }
        System.out.println();

        //Условие проверки
        boolean flag = true;
        for (i = 0; i < n; i++) {
            for (int b = 2; b < x[i]/2; b++) {
                if (x[i] % b == 0) {
                    flag = false;
                    break;
                }
            }
            if (flag == false) {
                flag = true;
            } else {
                System.out.print(x[i]+" ");
            }
        }

    }
}
