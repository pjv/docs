---
title: DNS configuration
description: ''
position: 2.3
category: Installation
---
To work properly, you'll need to configure a number of DNS records for your Postal installation. Review the table below and create appropriate DNS records with your DNS provider. You will need to enter the record names you choose in your `postal.yml` configuration file.

We'll assume for the purposes of this documentation you have both IPv4 and IPv6 available to your server. We'll use the following values in this documentation, you'll need to replace them as appropriate.

* `192.168.1.3` - IPv4 address
* `2a00:1234:abcd:1::3` - IPv6 address
* `postal.example.com` - the hostname you wish to use to run Postal

## A Records

You'll need these records for accessing the API, management interface & SMTP server.

<table>
  <thead>
    <tr>
      <th>Hostname</th>
      <th>Type</th>
      <th>Value</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>postal.example.com</td>
      <td>A</td>
      <td><code>192.168.1.3</code></td>
    </tr>
    <tr>
      <td>postal.example.com</td>
      <td>AAAA</td>
      <td><code>2a00:1234:abcd:1::3</code></td>
    </tr>
  </tbody>
</table>

## SPF Record

You can configure a global SPF record for your mail server which means domains don't need to each individually reference your server IPs. This allows you to make changes in the future.

<table>
  <thead>
    <tr>
      <th>Hostname</th>
      <th>Type</th>
      <th>Value</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>spf.postal.example.com</td>
      <td>TXT</td>
      <td><code>v=spf1 ip4:192.168.1.3 ip6:2a00:1234:abcd:1::3 ~all</code></td>
    </tr>
  </tbody>
</table>

<alert>
You may wish to replace <code>~all</code> with <code>-all</code> to make the SPF record stricter.
</alert>

## Return Path

The return path domain is the default domain that is used as the `MAIL FROM` for all messages sent through a mail server. You should add DNS records as below.

<table>
  <thead>
    <tr>
      <th>Hostname</th>
      <th>Type</th>
      <th>Value</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>rp.postal.example.com</td>
      <td>A</td>
      <td><code>192.168.1.3</code></td>
    </tr>
    <tr>
      <td>rp.postal.example.com</td>
      <td>AAAA</td>
      <td><code>2a00:1234:abcd:1::3</code></td>
    </tr>
    <tr>
      <td>rp.postal.example.com</td>
      <td>TXT</td>
      <td><code>v=spf1 a mx include:spf.postal.example.com ~all</code></td>
    </tr>
    <tr>
      <td>postal._domainkey.rp.postal.example.com</td>
      <td>TXT</td>
      <td>Value from <code>postal default-dkim-record</code></td>
    </tr>
  </tbody>
</table>


## Route domain

If you wish to receive incoming e-mail by forwarding messages directly to routes in Postal, you'll need to configure a domain for this just to point to your server using an MX record.

<table>
  <thead>
    <tr>
      <th>Hostname</th>
      <th>Type</th>
      <th>Value</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>routes.postal.example.com</td>
      <td>MX</td>
      <td><code>10 postal.example.com</code></td>
    </tr>
  </tbody>
</table>

## Example Postal Configuration

In your `postal.yml` you should have something like that looks like the below,.

```yaml
dns:
  mx_records:
    - postal.example.com
  smtp_server_hostname: postal.example.com
  track_domain: postal.example.com
  spf_include: spf.postal.example.com
  return_path: rp.postal.example.com
  route_domain: routes.postal.example.com
```
