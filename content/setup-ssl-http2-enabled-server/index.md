---
title: "Setup SSL and HTTP2 Enabled Server"
cover: "/ssl-http2.png"
category: "Web Development"
tags:
    - ssl
    - http2
    - digitalocean
    - nginx
    - web hosting
    - domain

date: "08/13/2017"
---
# Create the server

The first step is to [setup the server in Digitalocean](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04).  

[Digitalocen](https://www.digitalocean.com/) is easy to setup, and the price is low ($5 per month for 512 MB Memory / 20 GB Disk / Ubuntu 16.04.2 VPS).  It is good for some small personal website or self-study project.

The documentation and tutorial resources of Digitalocean is also very handy, you can easily find the answer you need in Google search.


# Create your domain name

This step is optional.  If you want to have your own domain name, you can create and host your domain name via the service provider.  I am using [OnlyDomains](https://www.onlydomains.com/), the price are about the same with other service provider (about $10 per year).

# Get the SSL certificate

The next step is to prepare the SSL certificate for your website.

One FREE and easy way is to [setup the SSL Cert with Let's Encrypt in the Nginx server](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04).  The documentation of the Digitalocean above is very detailed, and easy to follow.

One thing to note that if you want to enable HTTP2 in your site, please make sure you have the openSSH 1.0.2 or later installed.  Because the 1.0.2 or later version of openSSH support both ALPN and NPN, the previous version only support NPN.  In May 2016, Google released Chrome build 51, eliminating support for SPDY and NPN in favor of HTTP/2 and ALPN.  So we need ALPN in your Nginx server, to enable HTTP2 support in Chrome and other popular browser.  More details you can refer to this post: [Supporting HTTP/2 for Website Visitors](https://www.nginx.com/blog/supporting-http2-google-chrome-users/).

<table class="nginx-blog" border="1" style="width:100%">
    <colgroup>
        <col width="46%"><col width="24%">
    </colgroup>
    <tbody>
        <tr>
            <th>Operating System</th>
            <th>OpenSSL Version</th>
            <th>ALPN/NPN Support</th>
        </tr>
        <tr>
            <td>CentOS/Oracle Linux/RHEL 6.5+, 7.0+</td>
            <td>1.0.1e</td>
            <td>NPN</td>
        </tr>
        <tr>
            <td>Debian 7.0</td>
            <td>1.0.1e</td>
            <td>NPN</td>
        </tr>
        <tr>
            <td>Debian 8.0</td>
            <td>1.0.1k</td>
            <td>NPN</td>
        </tr>
        <tr>
            <td style="color:#f2a900">Debian 9.0</td>
            <td style="color:#f2a900">1.1.0f</td>
            <td style="color:#f2a900">ALPN and NPN</td>
        </tr>
        <tr>
            <td>Ubuntu 12.04 LTS</td>
            <td>1.0.1</td>
            <td>NPN</td>
        </tr>
        <tr>
            <td>Ubuntu 14.04 LTS</td>
            <td>1.0.1f</td>
            <td>NPN</td>
        </tr>
        <tr>
            <td style="color:#f2a900">Ubuntu 16.04 LTS</td>
            <td style="color:#f2a900">1.0.2g</td>
            <td style="color:#f2a900">ALPN and NPN</td>
        </tr>
    </tbody>
</table>

# Redirect your domain to your server

The last thing is to update the A record of your DNS provider, to route the traffics to your newly setup server ip address.

You can verify the secure icon on the browser address bar.

![ssl enabled](/photos/ssl-enabled.png "secure icon in browser")

The `h2` Protocal in the `Network` tab in Chrome browser dev console.

![http2 enabled](/photos/h2-protocal.png "h2 Protocal for all the traffics")
