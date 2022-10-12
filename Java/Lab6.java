import java.util.Scanner;

class Student_ {
    private String name;
    private int grant;

    public void Write(String n, int x) {
        name = n;
        grant = x;
    }

    public void Body() {
        grant = (int) (grant * 1.1);
        System.out.println("uR grant + 10% = " + grant);
    }
}

class Lab6 {
    public static void main(String[] args){
        String name;
        int grant;
        Student_ s = new Student_();
        Student_ s1 = new Student_();


        Scanner in = new Scanner(System.in);
        System.out.print("What is uR name?  ");
        name = in.next();
        System.out.print("What is uR grant?   ");
        grant = in.nextInt();
        s.Write( name , grant );
        s.Body();

        System.out.println();

        System.out.print("What is uR name?  ");
        name = in.next();
        System.out.print("What is uR grant? ");
        grant = in.nextInt();
        s1.Write( name, grant );
        s1.Body();
    }
}
