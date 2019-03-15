(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{168:function(e,t,s){"use strict";s.r(t);var n=s(0),i=Object(n.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("Deploying this project should be as simple as the steps "),s("router-link",{attrs:{to:"/#easy-to-deploy"}},[e._v("on the home page")]),e._v(", but in practice the suite can be much more finicky. Here we'll cover the details of deployment and steps to take to correct common problems.")],1),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._m(4),e._v(" "),e._m(5),e._v(" "),s("p",[e._v("You can launch the services individually using:")]),e._v(" "),e._m(6),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),s("p",[e._v("There are many guides for installing Nginx on a Linux server. Here's an abbreviated version:")]),e._v(" "),e._m(10),e._m(11),e._v(" "),e._m(12),e._v(" "),s("p",[e._v('You also need to link the configuration so it\'s "enabled":')]),e._v(" "),e._m(13),e._m(14),e._v(" "),e._m(15),e._v(" "),s("p",[e._v("Once the configuration is installed and linked, you should be able to access the webapp from "),s("code",[e._v("http://bastion.cs.fsu.edu")]),e._v(". Now follow the official Cerbot directions "),s("a",{attrs:{href:"https://certbot.eff.org/lets-encrypt/ubuntuxenial-nginx",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(" to install Certbot and configure the domains.")]),e._v(" "),e._m(16),e._v(" "),s("p",[e._v("Once all is done, you will have configured SSL connections for the Webapp and Domserver services. This means that external connections on port 443 will be forwarded via HTTP (not HTTPS) to the servers running inside docker containers in their locally exposed ports.")]),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),s("p",[e._v("The Domserver has an explicitly defined loop to retry the MariaDB database until it becomes ready. However, the Flask webapp's behavior in the MongoEngine connection is not explicitly known to this project's maintainers at the time of writing this.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"deployment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deployment","aria-hidden":"true"}},[this._v("#")]),this._v(" Deployment")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"in-a-perfect-world"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#in-a-perfect-world","aria-hidden":"true"}},[this._v("#")]),this._v(" In a Perfect World...")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If you're deploying on a server whose Nginx configuration is already complete, redeploying the services should be as easily as follows (otherwise see "),t("a",{attrs:{href:"#deploying-with-nginx"}},[this._v("Deploying with Nginx")]),this._v("):")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[e._v("# Download the code")]),e._v("\n"),s("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/FSU-ACM/Contest-Server.git\n\n"),s("span",{attrs:{class:"token comment"}},[e._v("# Copy in your config")]),e._v("\n"),s("span",{attrs:{class:"token function"}},[e._v("cp")]),e._v(" /your/docker/.env ./.env\n"),s("span",{attrs:{class:"token function"}},[e._v("cp")]),e._v(" /your/flask/production.py ./config/production.py\n\n"),s("span",{attrs:{class:"token comment"}},[e._v("# Build the images")]),e._v("\ndocker-compose build\n\n"),s("span",{attrs:{class:"token comment"}},[e._v("# Deploy the suite")]),e._v("\ndocker-compose up -d\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If that doesn't work, you try can starting services individually in the following order. Where there are failures, consult the logs using "),t("code",[this._v("docker-compose logs -f <service>")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("Databases")]),this._v(" "),t("li",[this._v("Servers")]),this._v(" "),t("li",[this._v("Judgehosts")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[e._v("# Relevant flags: -d (detatch), --build")]),e._v("\ndocker-compose up "),s("span",{attrs:{class:"token punctuation"}},[e._v("[")]),e._v("flags"),s("span",{attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),s("span",{attrs:{class:"token operator"}},[e._v("<")]),e._v("service"),s("span",{attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"deploying-with-nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploying-with-nginx","aria-hidden":"true"}},[this._v("#")]),this._v(" Deploying with Nginx")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("On the Bastion server, we use Nginx to provide reverse proxying (connecting incoming web connections made to "),t("code",[this._v("bastion.cs.fsu.edu")]),this._v(" to the correct service). Nginx requires configuration before use. Here's a rough overview of how to configure Nginx for deployment:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"make-sure-nginx-is-installed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#make-sure-nginx-is-installed","aria-hidden":"true"}},[this._v("#")]),this._v(" Make sure Nginx is installed")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("sudo apt-get update\nsudo apt-get install -y nginx\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"add-the-bastion-nginx-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-the-bastion-nginx-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Add the Bastion Nginx configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In the repository, an Nginx configuration is saved at "),t("code",[this._v("/config/nginx/bastion.conf")]),this._v(". You should copy this into the Nginx configuration directory, probably located at "),t("code",[this._v("/etc/nginx/sites-available")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("ln -s /etc/nginx/sites-available/bastion.conf /etc/nginx/sites-enabled/\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You should also remove any other configurations in "),t("code",[this._v("sites-enabled/")]),this._v(" unless you really know what you're doing.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"configure-https-ssl-using-certbot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configure-https-ssl-using-certbot","aria-hidden":"true"}},[this._v("#")]),this._v(" Configure HTTPS/SSL using Certbot")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"summary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#summary","aria-hidden":"true"}},[this._v("#")]),this._v(" Summary")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"common-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#common-issues","aria-hidden":"true"}},[this._v("#")]),this._v(" Common Issues")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"boot-order"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#boot-order","aria-hidden":"true"}},[this._v("#")]),this._v(" Boot Order")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The Docker Compose configuration uses the "),t("code",[this._v("depends_on")]),this._v(" settings to try and control the boot order. We do this because the servers can't launch without their respective databases. However, even with the databases launching beforehand, they might not be ready to receive connections by the time the servers come online.")])}],!1,null,null,null);i.options.__file="deployment.md";t.default=i.exports}}]);