import java.util.Scanner;

public class smthng {
    public static void main(String[] arg){
        Scanner in = new Scanner(System.in);
        int A[] = new int[10];
        int x = in.nextInt();
        int flag = 0;
        for (int i = 0; i < 10; i++){
            A[i] = i+1;
            System.out.print(A[i]+" ");
        }

        for (int i = 0; i < 10; i++){
            if (A[i] % 2 == 1){
                flag = 1;
                A[i]+=x;
            }
        }

        System.out.println();

        if (flag == 1)
            for (int i = 0; i < 10; i++){
                System.out.print(A[i]+" ");
            }
        else {
            System.out.println("No!");
        }
    }
}