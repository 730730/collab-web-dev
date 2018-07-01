function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// just google boot.log/rc.log
var log = `
[  OK  ] Started Show Plymouth Boot Screen.
[  OK  ] Reached target Paths.
[  OK  ] Reached target Basic System.
[  OK  ] Found device ST9500325AS.
[  OK  ] Started dracut initqueue hook.
         Starting dracut pre-mount hook...
[  OK  ] Reached target Remote File Systems (Pre).
[  OK  ] Reached target Remote File Systems.
[  OK  ] Started dracut pre-mount hook.
         Starting File System Check on /dev/disk/by-uuid/85e4ae33-c60e-4372-a6ba-9aeb23bf6d86...
[  OK  ] Started File System Check on /dev/disk/by-uuid/85e4ae33-c60e-4372-a6ba-9aeb23bf6d86.
         Mounting /sysroot...
[  OK  ] Mounted /sysroot.
[  OK  ] Reached target Initrd Root File System.
         Starting Reload Configuration from the Real Root...
[  OK  ] Started Reload Configuration from the Real Root.
[  OK  ] Reached target Initrd File Systems.
[  OK  ] Reached target Initrd Default Target.

[  OK  ] Stopped Switch Root.
[  OK  ] Stopped target Switch Root.
[  OK  ] Stopped target Initrd File Systems.
         Stopping File System Check on /dev/disk/by-uuid/85e4ae33-c60e-4372-a6ba-9aeb23bf6d86...
[  OK  ] Stopped File System Check on /dev/disk/by-uuid/85e4ae33-c60e-4372-a6ba-9aeb23bf6d86.
[  OK  ] Stopped target Initrd Root File System.
         Starting Collect Read-Ahead Data...
[  OK  ] Created slice User and Session Slice.
[  OK  ] Created slice system-getty.slice.
[  OK  ] Reached target Remote File Systems (Pre).
[  OK  ] Reached target Remote File Systems.
[  OK  ] Reached target System Time Synchronized.
[  OK  ] Reached target Slices.
[  OK  ] Listening on Delayed Shutdown Socket.
[  OK  ] Listening on /dev/initctl Compatibility Named Pipe.
         Starting Rule generator for /dev/root symlink...
[  OK  ] Stopped Trigger Flushing of Journal to Persistent Storage.
         Stopping Journal Service...
[  OK  ] Stopped Journal Service.
         Starting Journal Service...
[  OK  ] Reached target Paths.
         Mounting Debug File System...
[  OK  ] Set up automount Arbitrary Executable File Formats File System Automount Point.
         Starting Create list of required static device nodes for the current kernel...
         Mounting POSIX Message Queue File System...
         Mounting Huge Pages File System...
[  OK  ] Listening on LVM2 metadata daemon socket.
         Starting LVM2 metadata daemon...
[  OK  ] Listening on Device-mapper event daemon FIFOs.
         Starting Device-mapper event daemon...
         Expecting device dev-disk-by\x2duuid-b8736234\x2d9b90\x2d461b\x2da9db\x2ddd7146428838.device...
         Expecting device dev-disk-by\x2duuid-3911fc92\x2da5b9\x2d4434\x2d8c0e\x2d475e91bb52e9.device...
[  OK  ] Listening on udev Kernel Socket.
[  OK  ] Listening on udev Control Socket.
         Starting udev Coldplug all Devices...
         Expecting device dev-disk-by\x2duuid-89b81b4d\x2d0b19\x2d4a2a\x2d90cb\x2da3fbb1d48517.device...
         Expecting device dev-disk-by\x2duuid-85e4ae33\x2dc60e\x2d4372\x2da6ba\x2d9aeb23bf6d86.device...
[  OK  ] Started Create list of required static device nodes for the current kernel.
         Starting Create static device nodes in /dev...
[  OK  ] Started Collect Read-Ahead Data.
         Starting Load Kernel Modules...
         Starting Remount Root and Kernel File Systems...
[  OK  ] Started Rule generator for /dev/root symlink.
[  OK  ] Started LVM2 metadata daemon.
[  OK  ] Started Device-mapper event daemon.
[  OK  ] Started Load Kernel Modules.
         Starting Apply Kernel Variables...
[  OK  ] Started Journal Service.
[  OK  ] Started udev Coldplug all Devices.
         Starting udev Wait for Complete Device Initialization...
[  OK  ] Started Apply Kernel Variables.
[  OK  ] Started Create static device nodes in /dev.
         Starting udev Kernel Device Manager...
[  OK  ] Started udev Kernel Device Manager.
[  OK  ] Mounted Debug File System.
[  OK  ] Mounted POSIX Message Queue File System.
[  OK  ] Mounted Huge Pages File System.
[  OK  ] Started Remount Root and Kernel File Systems.
         Starting Load/Save Random Seed...
[  OK  ] Reached target Local File Systems (Pre).
[  OK  ] Started Load/Save Random Seed.
         Starting Entropy Daemon based on the HAVEGE algorithm...
[  OK  ] Started Entropy Daemon based on the HAVEGE algorithm.
[  OK  ] Started udev Wait for Complete Device Initialization.
         Starting Activation of LVM2 logical volumes...
[  OK  ] Created slice system-systemd\x2dbacklight.slice.
         Starting Load/Save Screen Backlight Brightness of backlight:acpi_video0...
         Starting Load/Save Screen Backlight Brightness of backlight:intel_backlight...
[  OK  ] Started Load/Save Screen Backlight Brightness of backlight:intel_backlight.
[  OK  ] Started Load/Save Screen Backlight Brightness of backlight:acpi_video0.
[  OK  ] Created slice system-systemd\x2drfkill.slice.
         Starting Load/Save RF Kill Switch Status of rfkill0...
         Starting Load/Save RF Kill Switch Status of rfkill1...
[  OK  ] Started Activation of LVM2 logical volumes.
[  OK  ] Reached target Encrypted Volumes.
         Starting Activation of LVM2 logical volumes...
[  OK  ] Started Load/Save RF Kill Switch Status of rfkill1.
[  OK  ] Started Load/Save RF Kill Switch Status of rfkill0.
[  OK  ] Started Activation of LVM2 logical volumes.
[  OK  ] Found device ST9500325AS.
         Mounting /.snapshots...
         Mounting /var/tmp...
         Mounting /var/spool...
         Mounting /var/opt...
         Mounting /var/log...
         Mounting /var/lib/pgsql...
         Mounting /var/lib/named...
         Mounting /var/lib/mailman...
         Mounting /var/crash...
         Mounting /usr/local...
         Mounting /tmp...
         Mounting /srv...
         Mounting /opt...
         Mounting /boot/grub2/x86_64-efi...
         Mounting /boot/grub2/i386-pc...
[  OK  ] Mounted /boot/grub2/x86_64-efi.
[  OK  ] Mounted /opt.
[  OK  ] Mounted /srv.
[  OK  ] Mounted /tmp.
[  OK  ] Mounted /usr/local.
[  OK  ] Mounted /var/crash.
[  OK  ] Mounted /var/lib/mailman.
[  OK  ] Mounted /var/lib/named.
[  OK  ] Mounted /var/lib/pgsql.
[  OK  ] Mounted /var/log.
[  OK  ] Mounted /var/opt.
[  OK  ] Mounted /var/spool.
[  OK  ] Mounted /var/tmp.
[  OK  ] Mounted /.snapshots.
[  OK  ] Found device ST9500325AS.
[  OK  ] Found device ST9500325AS.
[  OK  ] Found device ST9500325AS.
         Starting Load/Save RF Kill Switch Status of rfkill3...
         Starting Activation of LVM2 logical volumes...
         Starting File System Check on /dev/disk/by-uuid/89b81b4d-0b19-4a2a-90cb-a3fbb1d48517...
[  OK  ] Reached target Sound Card.
         Activating swap /dev/disk/by-uuid/b8736234-9b90-461b-a9db-dd7146428838...
         Activating swap /dev/disk/by-uuid/3911fc92-a5b9-4434-8c0e-475e91bb52e9...
         Starting Load/Save RF Kill Switch Status of rfkill2...
[  OK  ] Mounted /boot/grub2/i386-pc.
[  OK  ] Started Load/Save RF Kill Switch Status of rfkill3.
[  OK  ] Started Load/Save RF Kill Switch Status of rfkill2.
[  OK  ] Started File System Check on /dev/disk/by-uuid/89b81b4d-0b19-4a2a-90cb-a3fbb1d48517.
         Mounting /home...
[  OK  ] Activated swap /dev/disk/by-uuid/3911fc92-a5b9-4434-8c0e-475e91bb52e9.
[  OK  ] Activated swap /dev/disk/by-uuid/b8736234-9b90-461b-a9db-dd7146428838.
[  OK  ] Started Activation of LVM2 logical volumes.
         Starting Activation of LVM2 logical volumes...
[  OK  ] Reached target Swap.
[  OK  ] Started Activation of LVM2 logical volumes.
[  OK  ] Mounted /home.
[  OK  ] Reached target Local File Systems.
         Starting Shadow /etc/init.d/boot.localfs...
[  OK  ] Started Shadow /etc/init.d/boot.localfs.
         Starting LSB: Set default boot entry if called...
         Starting Tell Plymouth To Write Out Runtime Data...
         Starting Trigger Flushing of Journal to Persistent Storage...
[  OK  ] Started Trigger Flushing of Journal to Persistent Storage.
         Starting Create Volatile Files and Directories...
[  OK  ] Started Tell Plymouth To Write Out Runtime Data.
[  OK  ] Started LSB: Set default boot entry if called.
[  OK  ] Started Create Volatile Files and Directories.
         Starting LSB: AppArmor initialization...
         Starting Security Auditing Service...
[  OK  ] Started Security Auditing Service.
         Starting Update UTMP about System Reboot/Shutdown...
[  OK  ] Started Update UTMP about System Reboot/Shutdown.
[  OK  ] Started LSB: AppArmor initialization.
[  OK  ] Reached target System Initialization.
[  OK  ] Listening on D-Bus System Message Bus Socket.
[  OK  ] Listening on Open-iSCSI iscsid Socket.
[  OK  ] Listening on Avahi mDNS/DNS-SD Stack Activation Socket.
[  OK  ] Reached target Sockets.
[  OK  ] Reached target Timers.
         Starting Restore Sound Card State...
[  OK  ] Reached target Basic System.
         Starting Bluetooth service...
         Starting Machine Check Exception Logging Daemon...
[  OK  ] Started Machine Check Exception Logging Daemon.
         Starting LSB: Supports the direct execution of binary formats....
         Starting LSB: VirtualBox Linux kernel module...
         Starting LSB: This services starts and stops the USB Arbitrator....
         Starting LSB: HWActivator  daemon providing fxz...
         Starting Avahi mDNS/DNS-SD Stack...
         Starting Permit User Sessions...
         Starting Name Service Cache Daemon...
         Starting WPA Supplicant daemon...
         Starting Modem Manager...
         Starting irqbalance daemon...
[  OK  ] Started irqbalance daemon.
         Starting /etc/init.d/boot.local Compatibility...
         Starting D-Bus System Message Bus...
[  OK  ] Started D-Bus System Message Bus.
[  OK  ] Started Avahi mDNS/DNS-SD Stack.
[  OK  ] Started WPA Supplicant daemon.
[  OK  ] Started Bluetooth service.
[  OK  ] Reached target Bluetooth.
         Starting SuSEfirewall2 phase 1...
[  OK  ] Started Restore Sound Card State.
[  OK  ] Started LSB: HWActivator  daemon providing fxz.
[  OK  ] Started Permit User Sessions.
[  OK  ] Started Name Service Cache Daemon.
[  OK  ] Started /etc/init.d/boot.local Compatibility.
         Mounting Arbitrary Executable File Formats File System...
[  OK  ] Reached target User and Group Name Lookups.
         Starting Login Service...
[  OK  ] Reached target Host and Network Name Lookups.
         Starting Getty on tty1...
[  OK  ] Started Getty on tty1.
[  OK  ] Reached target Login Prompts.
         Starting /etc/init.d/after.local Compatibility...
[  OK  ] Started /etc/init.d/after.local Compatibility.
         Starting X Display Manager...
         Starting Authorization Manager...
[  OK  ] Started LSB: This services starts and stops the USB Arbitrator..
         Starting Hostname Service...
[  OK  ] Started Hostname Service.
[  OK  ] Started Login Service.
[  OK  ] Mounted Arbitrary Executable File Formats File System.
[  OK  ] Started LSB: Supports the direct execution of binary formats..
[  OK  ] Started LSB: VirtualBox Linux kernel module.
         Starting LSB: VirtualBox watchdog daemon...
         Starting LSB: VirtualBox autostart service...
         Starting LSB: VirtualBox web service API...
[  OK  ] Started LSB: VirtualBox autostart service.
[  OK  ] Started LSB: VirtualBox watchdog daemon.
[  OK  ] Started LSB: VirtualBox web service API.
         Starting Locale Service...
[  OK  ] Started Locale Service.
[  OK  ] Started Authorization Manager.
[  OK  ] Started Modem Manager.
`.split("\n");

(function() {
  var term;

  function parseArgs(str) {
    var args = [],
        arg = [],
        quote = 0,
        i = 0,
        k = -1,
        c;

    for (; c = str.charCodeAt(i); ++i) {
      switch(c) {
       case 92:
        c = str.charCodeAt(++i);
        if (c !== c) {
          throw new Error("Unexpected end of line");
        }
        arg[++k] = c;
        break;
       case 39:
       case 34:
        if (!~k && !quote) {
          quote = c;
          break;
        }
        if (quote === c) {
          quote = 0;
          break;
        }
        arg[++k] =  c;
        break;
       case 32:
        if (!quote) {
          if (~k) {
            args[args.length] = String.fromCharCode.apply(undefined, arg);
            k = -1, arg = [];
          }
          break;
        }
       default:
        arg[++k] = c;
        break;
      }
    }

    if (arg.length) {
      if (quote) {
        throw new Error("Expected " + String.fromCharCode(quote));
      }
      args[args.length] = String.fromCharCode.apply(undefined, arg);
    }

    return args;
  }

  function parse(line) {
    var cmd,
        args;
    if (!line.length) return;
    args = line.split(" ");
    cmd = args.shift();
    try {
      args = parseArgs(args.join(" "));
    }
    catch (err) {
      return term.echo(`Segfault(${err.message})`);
    }
    // after parseArgs is ran, this:
    //   ls -A --color "OP/sucks dick"
    // becomes this:
    //    cmd = "ls"
    //    args = ["-A", "--color", "OP/sucks dick"]

    // add more shit here boyes
    switch (cmd) {
      case "help":
        term.echo("Yeah, you need it");
        break;
      case "echo":
        term.echo(args.join(" "));
        break;
      default:
        term.echo("unknown command: " + cmd);
        break;
    }
  }

  _asyncToGenerator(function* () {
    var random = Math.random,
        sleep = { then: function then(_) { setTimeout(_, random() * 70); } },
        i = 0,
        len = log.length,
        style = document.createElement("style"),
        head = $("head").get(0);
    style.appendChild(document.createTextNode(".cmd { display: none; }"));
    head.appendChild(style);
    function cancel(e) { e.stopImmediatePropagation(); }
    window.addEventListener("input", cancel, true);
    window.addEventListener("keydown", cancel, true);
    window.addEventListener("keypress", cancel, true);
    window.addEventListener("keyup", cancel, true);
    term = $("body").terminal(parse, {
      prompt: "[[b;red;black]gentoo] [[b;blue;black]~#] ", greetings: ""
    });

    for (; i < len; ++i) {
      term.echo(log[i]);
      yield sleep;
    }

    window.removeEventListener("keyup", cancel, true);
    window.removeEventListener("keypress", cancel, true);
    window.removeEventListener("keydown", cancel, true);
    window.removeEventListener("input", cancel, true);
    head.removeChild(style);
  })();
}());
