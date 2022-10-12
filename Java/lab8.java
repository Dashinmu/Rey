import java.util.ArrayList;
import java.util.Scanner;

class Check{
    private int x;

    public Check(int sX){
        x = sX;
    }

    public void Show(){
        System.out.println(x+" ");
    }
}

class Workshop {
    private String name;
    private String chief;
    private int staff;

    public Workshop(String sName, String sChief, int sStaff){
        name = sName;
        chief = sChief;
        staff = sStaff;
    }

    public int GetStaff(){
        return staff;
    }

    public void Show(){
        System.out.println("Name is "+name+" Chief is "+chief+" Staff is "+staff);
    }

    public void Write(String sName, String sChief, int sStaff){
        name = sName;
        chief = sChief;
        staff = sStaff;
    }
}

public class lab8 {
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);

        ArrayList<Workshop> mas = new ArrayList<Workshop>();
        mas.add(new Workshop("Workshop 1", "Matyushin", 28));
        mas.add(new Workshop("Workshop 2", "Sorokina", 20));
        mas.add(new Workshop("Workshop 3", "Sergeev", 60));

        ArrayList mas_check = new ArrayList();
        mas_check.add(25);
        mas_check.add(26);
        mas_check.add(27);
        mas_check.add(28);

        double count=0;
        int n=0;
        for(Workshop i: mas){
            count+=i.GetStaff();
            i.Show();
            n++;
        }

        count = count/n;
        System.out.println("Average value is "+count);

        System.out.println();

        System.out.println(mas_check);
    }
}
