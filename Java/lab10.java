abstract class A {
    abstract void callMeA();
    void callMe(){
        System.out.println("Notice me, Senpai!");
    }
}

class A1 extends A{
    void callMeA(){
        System.out.println("Call me, Senpai!");
    }
}

public class lab10 {
    public static void main(String[] args){
        A1 obj = new A1();
        obj.callMe();
        obj.callMeA();
    }
}