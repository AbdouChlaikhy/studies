class exceptNote(Exception):
    pass


class student:
    i = 0
    n1=0
    n2=0
    def __init__(self,nom,n1,n2):
        self.nom = nom 
        self.setN1(n1)
        self.setN2(n2)
        self.i += 1 
    def getN1(self):
        return self.n1
    def getN2(self):
        return self.n2
    def getNom(self):
        return self.nom
    
    def setNom(self,n):
        self.nom = n
    def setN1(self,n1):
        if n1>20 or n1<0:
            raise exceptNote
        else : 
            self.n1=n1
        
    def setN2(self,n2):
        if n2<0 or n2>20:
            raise exceptNote
        else:
            self.n2 = n2
        
    def afficher(self):
        print('Nom : ',self.nom)
        print('note 1:',str(self.n1),'note2 : ',str(self.n2))
        print('number of students :',self.i)
    
    def exceptNote1(n1):
        if n1<0 or n1>20:
            raise exceptNote()
        
    
        
        
try:
    n = input('entrer le nom :')
    n1 = int(input('entrer note 1 : '))
    n2 = int(input('entrer note 2 :'))
    s1 = student(n,n1,n2)
    s1.afficher()
except exceptNote:
    print('type a number')
    




        
        