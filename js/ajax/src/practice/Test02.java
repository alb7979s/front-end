package practice;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

// http://localhost:8080/ajax/practice/test02
// 서블릿 프로젝트 경로 빼고 씀(자동으로 붙어서. 예외적인 상황임 나머지 경로 부를때는 프로젝트 경로 생략하면 안됨) 
@WebServlet("/practice/test02")		//url 맘대로 만들수있음, 대신 충돌 안나게 보통 패키지+클래스명으로 해줌
public class Test02 extends HttpServlet {
	
	private Map<String, String> users = new HashMap<>();
	public Test02() {
		users.put("admin", "admin");
		users.put("user", "user");
	}
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("요청 들어옴");
		// 사용자에게 응답하기 
		
		// (응답되는 데이터 문서 타입을 알려준다)
//		resp.setContentType("text/html; charset=utf-8");
		resp.setContentType("application/json; charset=utf-8");
		// 1. 요청 정보 처리	
		// 2. 결과 클라이언트로 보내주는거
		// http://localhost:8080/ajax/practice/test02?id=admin&pass=admin
		String id = req.getParameter("id");
		String pass = req.getParameter("pass");
		/*
		 * 	0 : 로그인 성공
		 * 	1 : 아이디가 존재하지 않습니다.
		 * 	2 : 패스워드가 잘못되었습니다.
		 * 
		 * 	xml
		 * 	<result>
		 * 		<code>0</code>
		 * 		<msg>로그인 성공</msg>
		 * 	</result>
		 * 
		 * 	json
		 * {
		 * 	"code": 0,
		 * 	"msg": "로그인 성공"
		 * }
		 * 	
		 */
		String code = "0";
		String msg = "로그인 성공";
		if(users.containsKey(id)) {
			// null일 수 있는 값을 뒤에 주는게 좋음 그래야 NPE안뜸
			if (!users.get(id).equals(pass)) {
				code = "2";
				msg = "패스워드가 잘못되었습니다.";
			}
		}else {
			code = "1";
			msg = "아이디가 존재하지 않습니다.";
		}
		// 정보들을 json으로 만들어주기~
		String result = "{" +
				"\"code\":\"" + code + "\"" + ", " +
				"\"msg\":\"" + msg + "\"" +
		"}";
		// \" 이렇게 해줘야하는거 너무 복잡함 나중에 Gson이라는 라이브러리를 이용해서 json 변환함(GoogleJson)
		System.out.println(result);
		PrintWriter out = resp.getWriter(); 
		out.println(result);		
		out.close();
		/*
		// http://localhost:8080/ajax/practice/test02?msg="";
		String msg = req.getParameter("msg");
		PrintWriter out = resp.getWriter(); 
		out.println("<h1>SUCCESS -" + msg + "</h1>");		
		out.close(); 
		*/
	}
}
