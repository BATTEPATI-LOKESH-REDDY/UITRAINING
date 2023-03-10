function welcome() {
    usersaccounts = [
        {
            name: "ravi",
            accountnumber: "12345",
            Cardnumber: "987654321",
            pinNumber: "123",
            accountbalance: "1000",
        },
        {
            name: "ragu",
            accountnumber: "12346",
            Cardnumber: "987654322",
            pinNumber: "456",
            accountbalance: "5000",
        }
    ]
    function control() {
        cardnumber = prompt("Enter the card number");
        pin = prompt("Enter the pin number")
        for (user of usersaccounts) {
            if (user.Cardnumber == cardnumber && user.pinNumber == pin) {
                alert("Welcome " + user.name + " Enter your choice")
                choice = prompt("enter the choice" + "\n" + "1.withdraw" + "\n" + "2.deposit");
                console.log(choice)
                switch (choice) {
                    case "1": {
                        amount = prompt("Enter the withdraw amount")
                        currentamount = user.accountbalance - parseInt(amount);
                        alert(currentamount)
                        break;
                    }
                    case "2": {
                        amount = prompt("enter the deposit amount")
                        currentamount = parseInt(user.accountbalance) + parseInt(amount);
                        alert(currentamount)
                        break;
                    }
                }



            }

        }

    }
    control()

}
welcome()