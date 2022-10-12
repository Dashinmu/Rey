class Pair_<Integer>{
    int first;
    int second;

    public Pair_(int a, int b) {
        first = a;
        second = b;
    }

    public Pair_() {
        first = 0;
        second = 0;
    }

    int Sum_pair(Pair_ a){
        return a.first+a.second;
    }

    int Sub_pair(Pair_ a){
        return a.first-a.second;
    }

    int Mult_pair(Pair_ a){
        return a.first*a.second;
    }
}

class Long extends Pair_{
    Pair_<Integer> ab;
    Pair_<Integer> cd;

    public Long() {
        ab = new Pair_<Integer>(0,0);
        cd = new Pair_<Integer>(0,0);
    }

    void Write(int a, int b, int c, int d){
        ab = new Pair_<Integer>(a,b);
        cd = new Pair_<Integer>(c,d);
    }

    Pair_<Integer> Sum(){
        Pair_ sum = new Pair_<Integer>(0,0);
        sum.first = sum.Sum_pair(ab);
        sum.second = sum.Sum_pair(cd);
        return sum;
    }

    Pair_<Integer> Sub(){
        Pair_ sub = new Pair_<Integer>(0,0);
        sub.first = sub.Sub_pair(ab);
        sub.second = sub.Sub_pair(cd);
        return sub;
    }

    Pair_<Integer> Mult(){
        Pair_ mult = new Pair_<Integer>(0,0);
        mult.first = mult.Mult_pair(ab);
        mult.second = mult.Mult_pair(cd);;
        return mult;
    }
}

public class lab9_dashinmu {
    public static void main(String[] args){
        Long num = new Long();
        num.Write(5, 2, 3, 4);

        System.out.println(num.Sum().first+" "+num.Sum().second);
        System.out.println(num.Sub().first+" "+num.Sub().second);
        System.out.println(num.Mult().first+" "+num.Mult().second);
    }
}