/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/8.0.50
 * Generated at: 2020-07-20 07:00:37 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.view;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;
import dbmanager.*;
import beans.*;
import dao.*;

public final class ranking_jsp extends org.apache.jasper.runtime.HttpJspBase
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
    _jspx_imports_packages.add("java.util");
    _jspx_imports_packages.add("dao");
    _jspx_imports_packages.add("javax.servlet.http");
    _jspx_imports_packages.add("beans");
    _jspx_imports_packages.add("dbmanager");
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
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("<!DOCTYPE html>\r\n");
      out.write("<html>\r\n");
      out.write("\t<head>\r\n");
      out.write("\t\t<meta charset=\"UTF-8\">\r\n");
      out.write("\t\t<title>笑撃の新人/結果発表ーー!!</title>\r\n");
      out.write("\r\n");
      out.write("\t\t<!-- JavaScript読み込み開始 -->\r\n");
      out.write("\t\t\t<script type=\"text/javascript\" src=\"javascript/common/common.js\"></script>\r\n");
      out.write("\r\n");
      out.write("\t\t<!-- JavaScript読み込み終了 -->\r\n");
      out.write("\r\n");
      out.write("\t\t<!-- CSS読み込み開始 -->\r\n");
      out.write("\t\t\t<script type=\"text/javascript\">common_link();</script>\r\n");
      out.write("\t\t<!-- CSS読み込み終了 -->\r\n");
      out.write("\t</head>\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\t<body>\r\n");
      out.write("\t\t<!-- ヘッダー部分スタート(function heder()呼び出し) -->\r\n");
      out.write("\t\t\t<script type=\"text/javascript\">header();</script>\r\n");
      out.write("\t\t<!-- ヘッダー部分終了 -->\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\t\t<!-- メイン画面開始 -->\r\n");
      out.write("\t\t<!-- 20200703 加納 centerタグ変更-->\r\n");
      out.write("\t\t<div style=\"text-align: center\">\r\n");
      out.write("\t\t\t<!-- canvasの設定開始 -->\r\n");
      out.write("\t\t\t\t<script type=\"text/javascript\">canvas_func();</script><br>\r\n");
      out.write("\t\t\t<!-- canvas中のテキスト設定 -->\r\n");
      out.write("\t\t\t\t<script type=\"text/javascript\">var canvas = document.getElementById(\"canvas\");</script>\r\n");
      out.write("\t\t\t\t<script type=\"text/javascript\">var ctx = canvas.getContext(\"2d\");</script>\r\n");
      out.write("\t\t\t\t<script type=\"text/javascript\">ctx.font = \"25px AXIS\";</script>\r\n");
      out.write("\r\n");
      out.write("\t\t\t<!-- canvasの設定終了 -->\r\n");
      out.write("\t\t\t<script type=\"text/javascript\" src=\"javascript/ranking/ranking.js\"></script>\r\n");
      out.write("\t\t\t<script type=\"text/javascript\">start();</script><br>\r\n");
      out.write("\r\n");
      out.write("\t\t\t<!-- canvas内にランキング表示! -->\r\n");
      out.write("\t\t\t<!-- 2020/7/7 ランキング上位4～10位を右側に表示するように変更開始  加納 -->\r\n");
      out.write("\t\t\t");

				List<RankingBean> RankingList = (List<RankingBean>)request.getAttribute("rankingList");
				for(int i = 0; i < RankingList.size(); i++){
					RankingBean rbean = RankingList.get(i);
			
      out.write("\r\n");
      out.write("\t\t\t\t\t<script type=\"text/javascript\">\r\n");
      out.write("\t\t\t\t\tstart = setInterval(function() {\r\n");
      out.write("\t\t\t\t\t\tvar count  = ");
      out.print( i  );
      out.write(";\r\n");
      out.write("\t\t\t\t\t\tvar width  = 460;\r\n");
      out.write("\r\n");
      out.write("\t\t\t\t\t\tif(count <= 2){\r\n");
      out.write("\t\t\t\t\t\t\tvar heigth = (130*(count + 1) -27);\r\n");
      out.write("\t\t\t\t\t\t\tctx.font = \"40px AXIS\"\r\n");
      out.write("\t\t\t\t\t\t\tctx.strokeText(count+1,50,heigth);\r\n");
      out.write("\t\t\t\t\t\t\tctx.font = \"25px AXIS\"\r\n");
      out.write("\t\t\t\t\t\t\tctx.strokeText(\"");
      out.print( rbean.getRname() );
      out.write("\",105,heigth-5);\r\n");
      out.write("\t\t\t\t\t\t\tctx.font = \"40px AXIS\"\r\n");
      out.write("\t\t\t\t\t\t\tctx.strokeText( ");
      out.print( rbean.getScore() );
      out.write(" ,395,heigth);\r\n");
      out.write("\t\t\t\t\t\t}else{\r\n");
      out.write("\t\t\t\t\t\t\tvar heigth = (78*(count + 1)-230);\r\n");
      out.write("\t\t\t\t\t\t\tctx.font = \"30px AXIS\";\r\n");
      out.write("\t\t\t\t\t\t\tctx.strokeText(count+1,45+width,heigth);\r\n");
      out.write("\t\t\t\t\t\t\tctx.font = \"15px AXIS\";\r\n");
      out.write("\t\t\t\t\t\t\tctx.strokeText(\"");
      out.print( rbean.getRname() );
      out.write("\",85+width,heigth-5);\r\n");
      out.write("\t\t\t\t\t\t\tctx.font = \"30px AXIS\";\r\n");
      out.write("\t\t\t\t\t\t\tctx.strokeText( ");
      out.print( rbean.getScore() );
      out.write(" ,265+width,heigth);\r\n");
      out.write("\t\t\t\t\t\t}\r\n");
      out.write("\t\t\t\t\t}, 100);\r\n");
      out.write("\t\t\t\t\t</script>\r\n");
      out.write("\t\t\t");
}
      out.write("\r\n");
      out.write("\t\t\t<!-- 2020/7/7 上位4～10位を右側に表示するように変更終了  加納 -->\r\n");
      out.write("\t\t</div><br>\r\n");
      out.write("\t\t<!-- メイン画面終了 -->\r\n");
      out.write("\t\t<div style=\"text-align: center\">\r\n");
      out.write("<font color=\"white\">\r\n");
      out.write("\r\n");
      out.write("\t\t\t\t<a href=\"");
      out.print( request.getContextPath() );
      out.write("/name\">TOPへ</a>\r\n");
      out.write("\t\t\t</font>\r\n");
      out.write("\t\t</div><br>\r\n");
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
