function DomainInit(){

    let command1 = "net ads info 2> /dev/null | grep Realm | cut -d':' -f2 | tr -d ' ' | tr -d '\n'";
    let output_domain = zabit.runCommand(command1);


    if(output_domain === ""){
        output1 = "Domain Bulunamadı";
    } else {
        GetDomainInfo(output_domain);
        GetDateInfo();
        GetServiceInfo();
   }
}

function GetDomainInfo(domainame) {

    let command1 = "net ads workgroup | cut -d':' -f2 | tr -d ' ' | tr -d '\n'";
    output_domain = "<b>Domain</b>: "+domainame;
    output_w = "<b>Workgroup</b>: "+zabit.runCommand(command1);

    $("#domainInfo").html("<hr>"+output_domain+"<br>"+output_w);
}

function GetDateInfo() {

    let command1 = "date +'%a %b %d %T %Y'"; 
    output_ldate = "<b>Local Date</b>: "+zabit.runCommand(command1);
    // TODO: get date with UDP from NTP Server
    output_ddate = "<b>Domain Date</b>: "+zabit.runCommand(command1);

    $("#dateInfo").html("<hr>"+output_ldate+"<br>"+output_ddate);
}

function GetServiceInfo() {

    let command1 = "systemctl is-active sssd.service";
    let command2 = "systemctl is-active smbd.service";
    
    output_ssssd = "<b>SSSD Service</b>: "+zabit.runCommand(command1);
    output_ssmbd = "<b>SMBD Service</b>: "+zabit.runCommand(command2);

    $("#serviceInfo").html("<hr>"+output_ssssd+"<br>"+output_ssmbd);
}


