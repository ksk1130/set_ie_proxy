({
    WAIT_LONG:5000,
    WAIT_SHORT:2000,
    PROXY_URL:"http://localhost/",
    main: function () {
        var shell = WScript.CreateObject("WScript.Shell");
        
        shell.Run("iexplore.exe",1,true);
        WScript.Sleep(this.WAIT_LONG);
        
        shell.SendKeys("%t");
        WScript.Sleep(this.WAIT_SHORT);
        
        shell.SendKeys("o");
        WScript.Sleep(this.WAIT_SHORT);
        
        shell.SendKeys("^{TAB}^{TAB}^{TAB}^{TAB}");
        WScript.Sleep(this.WAIT_SHORT);
        
        shell.SendKeys("%l");
        WScript.Sleep(this.WAIT_SHORT);
        
        shell.SendKeys("%a");
        WScript.Sleep(this.WAIT_SHORT);
        
        shell.SendKeys("%s");
        WScript.Sleep(this.WAIT_SHORT);
        
        shell.SendKeys("%r");
        WScript.Sleep(this.WAIT_SHORT);
        
        shell.SendKeys(this.PROXY_URL);
    }
}).main()
