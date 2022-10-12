import java.util.Scanner;

public class Lab4_1 {
    public static void main(String[] args){
        Scanner in = new Scanner (System.in);
        System.out.println("Введите N и k");
        float n = in.nextInt();
        float k = in.nextInt();
        float F = n;
        for (int i = 1; i < k; i++){
            F *= (n-i)/i;
        }
        System.out.println(F);
    }
}
