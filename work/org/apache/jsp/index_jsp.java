/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/8.0.50
 * Generated at: 2020-07-27 06:35:45 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class index_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent,
                 org.apache.jasper.runtime.JspSourceImports {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private static final java.util.Set<java.lang.String> _jspx_imports_packages;

  private static final java.util.Set<java.lang.String> _jspx_imports_classes;

  static {
    _jspx_imports_packages = new java.util.HashSet<>();
    _jspx_imports_packages.add("javax.servlet");
    _jspx_imports_packages.add("javax.servlet.http");
    _jspx_imports_packages.add("javax.servlet.jsp");
    _jspx_imports_classes = null;
  }

  private volatile javax.el.ExpressionFactory _el_expressionfactory;
  private volatile org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public java.util.Set<java.lang.String> getPackageImports() {
    return _jspx_imports_packages;
  }

  public java.util.Set<java.lang.String> getClassImports() {
    return _jspx_imports_classes;
  }

  public javax.el.ExpressionFactory _jsp_getExpressionFactory() {
    if (_el_expressionfactory == null) {
      synchronized (this) {
        if (_el_expressionfactory == null) {
          _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
        }
      }
    }
    return _el_expressionfactory;
  }

  public org.apache.tomcat.InstanceManager _jsp_getInstanceManager() {
    if (_jsp_instancemanager == null) {
      synchronized (this) {
        if (_jsp_instancemanager == null) {
          _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
        }
      }
    }
    return _jsp_instancemanager;
  }

  public void _jspInit() {
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

final java.lang.String _jspx_method = request.getMethod();
if (!"GET".equals(_jspx_method) && !"POST".equals(_jspx_method) && !"HEAD".equals(_jspx_method) && !javax.servlet.DispatcherType.ERROR.equals(request.getDispatcherType())) {
response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, "JSPs only permit GET POST or HEAD");
return;
}

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html; charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\r\n");
      out.write("<!DOCTYPE html>\r\n");
      out.write("\r\n");
      out.write("<html>\r\n");
      out.write("\t<head>\r\n");
      out.write("\t\t<meta charset=\"UTF-8\">\r\n");
      out.write("\t\t<title>笑撃の新人</title>\r\n");
      out.write("\r\n");
      out.write("\t\t<!-- JavaScript読み込み開始 -->\r\n");
      out.write("\t\t\t<script type=\"text/javascript\" src=\"javascript/common/common.js\"></script>\r\n");
      out.write("\t\t<!-- JavaScript読み込み終了 -->\r\n");
      out.write("\r\n");
      out.write("\t\t<!-- CSS読み込み開始 -->\r\n");
      out.write("\t\t\t<script type=\"text/javascript\">common_link();</script>\r\n");
      out.write("\t\t\t<link rel=\"stylesheet\" href=\"css/index/index.css\">\r\n");
      out.write("\t\t<!-- CSS読み込み終了 -->\r\n");
      out.write("\t</head>\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\t<body>\r\n");
      out.write("\t\t<!-- ヘッダー部分スタート(function heder()呼び出し) -->\r\n");
      out.write("\t\t\t<script type=\"text/javascript\">header();</script>\r\n");
      out.write("\t\t<!-- ヘッダー部分終了 -->\r\n");
      out.write("\r\n");
      out.write("\t\t<!-- メイン部分スタート -->\r\n");
      out.write("\t\t<div style=\"text-align: center\" class = \"parent\">\r\n");
      out.write("\r\n");
      out.write("\t\t\t<!-- canvas開始 -->\r\n");
      out.write("\t\t\t\t<script type=\"text/javascript\">canvas_func();</script>\r\n");
      out.write("\t\t\t<!-- canvas終了 -->\r\n");
      out.write("\r\n");
      out.write("\t\t\t<!-- キャンバス内の動きを呼び出し開始 -->\r\n");
      out.write("\t\t\t\t<script type=\"text/javascript\" src=\"javascript/index/index.js\"></script>\r\n");
      out.write("\t\t\t\t<script type=\"text/javascript\">start();</script>\r\n");
      out.write("\t\t\t<!-- キャンバス内の動きを呼び出し終了 -->\r\n");
      out.write("\r\n");
      out.write("\t\t\t<!--ボタン部分の設定  -->\r\n");
      out.write("\t\t\t\t<div class = \"body-margin child form-control-lg\">\r\n");
      out.write("\t\t\t\t\t<form action=\"");
      out.print( request.getContextPath() );
      out.write("/name\"method=\"post\">\r\n");
      out.write("\t\t\t\t\t\t<input type=\"text\" name=\"name\" placeholder=\"芸名を書き込め！\"><br>\r\n");
      out.write("\t\t\t\t\t\t<button class=\"w3-button w3-xlarge w3-red btn-color\">　Let's MANZAI!　</button>\r\n");
      out.write("\t\t\t\t\t</form>\r\n");
      out.write("\t\t\t\t\t<a href=\"");
      out.print( request.getContextPath() );
      out.write("/Winner\">\r\n");
      out.write("\t\t\t\t\t\t<button class=\"w3-button w3-xlarge w3-red btn-color\">　　ランキング　　</button>\r\n");
      out.write("\t\t\t\t\t</a>\r\n");
      out.write("\t\t\t\t</div><br>\r\n");
      out.write("\t\t\t<!--ボタン部分の設定  -->\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t\t<!-- メイン部分終了 -->\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\t\t<!-- フッター部分スタート(function footer()呼び出し)-->\r\n");
      out.write("\t\t\t<script type=\"text/javascript\">footer();</script>\r\n");
      out.write("\t\t<!-- フッター部分終了-->\r\n");
      out.write("\t</body>\r\n");
      out.write("</html>");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
