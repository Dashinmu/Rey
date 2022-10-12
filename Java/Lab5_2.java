import java.util.Random;
import java.util.Scanner;

public class Lab5_2 {
    public static void main (String[] args) {
        Scanner in = new Scanner(System.in);
        Random random = new Random();
        System.out.println("Введите кол-во строк и стоблцов");
        int r = in.nextInt();
        int c = in.nextInt();

        int i,j;

        //Заполнение массива
        int m [][] = new int [r][c];
        for (i = 0; i < r; i++) {
            for (j = 0; j < c; j++) {
                m[i][j] = random.nextInt(99)+1;
                System.out.print(m[i][j]+" ");
            }
            System.out.println();
        }

        //Сумма всех элементов и элементов в строке
        System.out.println();
        System.out.print("Сумма по строке ");
        int sum = 0;
        int sumR = 0;
        for (i = 0; i < r; i++) {
            for (j = 0; j < c; j++) {
                sum += m[i][j];
                sumR += m[i][j];
            }
            System.out.print(sumR+" ");
            sumR = 0;
        }
        System.out.println();
        System.out.println();
        System.out.println("Сумма всех элементов "+sum);
        System.out.println();
        System.out.print("Сумма по столбцам ");

        //Сумма элементов в столбце
        int sumC = 0;
        for (j = 0; j < c; j++) {
            for (i = 0; i < r; i++) {
                sumC += m[i][j];
            }
            System.out.print(sumC+" ");
            sumC = 0;
        }

        //Сумма по диоганалям
        int sumD = 0;
        System.out.println();
        System.out.println();
        System.out.print("Сумма по диагоналям ");
        for (i = 0; i < r; i++) {
            for (j = 0; j < c; j++) {
                if (i==j) {
                    sumD += m[i][j];
                }
            }
        }
        System.out.println(sumD);
    }
}
