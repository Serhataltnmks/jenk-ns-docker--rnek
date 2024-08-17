Started by user serhat a

[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins
 in /var/lib/jenkins/workspace/chess
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Clone Repository)
[Pipeline] git
The recommended git tool is: NONE
using credential chess
 > git rev-parse --resolve-git-dir /var/lib/jenkins/workspace/chess/.git # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url https://gitlab.com/serhataltnmks/chess-ai-game.git # timeout=10
Fetching upstream changes from https://gitlab.com/serhataltnmks/chess-ai-game.git
 > git --version # timeout=10
 > git --version # 'git version 2.25.1'
using GIT_ASKPASS to set credentials chess
 > git fetch --tags --force --progress -- https://gitlab.com/serhataltnmks/chess-ai-game.git +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/master^{commit} # timeout=10
Checking out Revision d62ac30c8f555f89f2718e3f1cd4dc0cf2c380e4 (refs/remotes/origin/master)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f d62ac30c8f555f89f2718e3f1cd4dc0cf2c380e4 # timeout=10
 > git branch -a -v --no-abbrev # timeout=10
 > git branch -D master # timeout=10
 > git checkout -b master d62ac30c8f555f89f2718e3f1cd4dc0cf2c380e4 # timeout=10
Commit message: "Initial commit"
 > git rev-list --no-walk d62ac30c8f555f89f2718e3f1cd4dc0cf2c380e4 # timeout=10
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Build)
[Pipeline] sh
+ mvn clean package
[[1;34mINFO[m] Scanning for projects...
[[1;34mINFO[m] 
[[1;34mINFO[m] [1m---------------------< [0;36mcom.example:chess-ai-game[0;1m >----------------------[m
[[1;34mINFO[m] [1mBuilding chess-ai-game 1.0-SNAPSHOT[m
[[1;34mINFO[m] [1m--------------------------------[ jar ]---------------------------------[m
[[1;34mINFO[m] 
[[1;34mINFO[m] [1m--- [0;32mmaven-clean-plugin:3.2.0:clean[m [1m(default-clean)[m @ [36mchess-ai-game[0;1m ---[m
[[1;34mINFO[m] Deleting /var/lib/jenkins/workspace/chess/target
[[1;34mINFO[m] 
[[1;34mINFO[m] [1m--- [0;32mmaven-resources-plugin:3.2.0:resources[m [1m(default-resources)[m @ [36mchess-ai-game[0;1m ---[m

[[1;34mINFO[m] Using 'UTF-8' encoding to copy filtered resources.
[[1;34mINFO[m] Using 'UTF-8' encoding to copy filtered properties files.
[[1;34mINFO[m] Copying 1 resource
[[1;34mINFO[m] Copying 13 resources
[[1;34mINFO[m] 
[[1;34mINFO[m] [1m--- [0;32mmaven-compiler-plugin:3.10.1:compile[m [1m(default-compile)[m @ [36mchess-ai-game[0;1m ---[m
[[1;34mINFO[m] Changes detected - recompiling the module!
[[1;34mINFO[m] Compiling 7 source files to /var/lib/jenkins/workspace/chess/target/classes

[[1;34mINFO[m] 
[[1;34mINFO[m] [1m--- [0;32mmaven-resources-plugin:3.2.0:testResources[m [1m(default-testResources)[m @ [36mchess-ai-game[0;1m ---[m
[[1;34mINFO[m] Using 'UTF-8' encoding to copy filtered resources.
[[1;34mINFO[m] Using 'UTF-8' encoding to copy filtered properties files.
[[1;34mINFO[m] skip non existing resourceDirectory /var/lib/jenkins/workspace/chess/src/test/resources
[[1;34mINFO[m] 
[[1;34mINFO[m] [1m--- [0;32mmaven-compiler-plugin:3.10.1:testCompile[m [1m(default-testCompile)[m @ [36mchess-ai-game[0;1m ---[m
[[1;34mINFO[m] Changes detected - recompiling the module!
[[1;34mINFO[m] Compiling 1 source file to /var/lib/jenkins/workspace/chess/target/test-classes
[[1;34mINFO[m] 
[[1;34mINFO[m] [1m--- [0;32mmaven-surefire-plugin:2.22.2:test[m [1m(default-test)[m @ [36mchess-ai-game[0;1m ---[m

[[1;34mINFO[m] 
[[1;34mINFO[m] -------------------------------------------------------
[[1;34mINFO[m]  T E S T S
[[1;34mINFO[m] -------------------------------------------------------

[[1;34mINFO[m] Running com.example.chess.[1mAppTest[m
[[1;34mINFO[m] [1;32mTests run: [0;1;32m1[m, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.11 s - in com.example.chess.[1mAppTest[m

[[1;34mINFO[m] 
[[1;34mINFO[m] Results:
[[1;34mINFO[m] 
[[1;34mINFO[m] [1;32mTests run: 1, Failures: 0, Errors: 0, Skipped: 0[m
[[1;34mINFO[m] 
[[1;34mINFO[m] 
[[1;34mINFO[m] [1m--- [0;32mmaven-jar-plugin:3.2.2:jar[m [1m(default-jar)[m @ [36mchess-ai-game[0;1m ---[m
[[1;34mINFO[m] Building jar: /var/lib/jenkins/workspace/chess/target/chess-ai-game-1.0-SNAPSHOT.jar
[[1;34mINFO[m] 
[[1;34mINFO[m] [1m--- [0;32mspring-boot-maven-plugin:2.7.5:repackage[m [1m(repackage)[m @ [36mchess-ai-game[0;1m ---[m

[[1;34mINFO[m] Replacing main artifact with repackaged archive
[[1;34mINFO[m] [1m------------------------------------------------------------------------[m
[[1;34mINFO[m] [1;32mBUILD SUCCESS[m
[[1;34mINFO[m] [1m------------------------------------------------------------------------[m
[[1;34mINFO[m] Total time:  9.072 s
[[1;34mINFO[m] Finished at: 2024-08-17T19:20:25+03:00
[[1;34mINFO[m] [1m------------------------------------------------------------------------[m
[Pipeline] }
[Pipeline] // stage

[Pipeline] stage
[Pipeline] { (SonarQube Analizi)
[Pipeline] withSonarQubeEnv
Injecting SonarQube environment variables using the configuration: SonarQube
[Pipeline] {
[Pipeline] sh
+ mvn sonar:sonar -Dsonar.projectKey=chess-ai-game -Dsonar.login=chess2

[[1;34mINFO[m] Scanning for projects...

[[1;34mINFO[m] 
[[1;34mINFO[m] [1m---------------------< [0;36mcom.example:chess-ai-game[0;1m >----------------------[m
[[1;34mINFO[m] [1mBuilding chess-ai-game 1.0-SNAPSHOT[m
[[1;34mINFO[m] [1m--------------------------------[ jar ]---------------------------------[m
[[1;34mINFO[m] 
[[1;34mINFO[m] [1m--- [0;32msonar-maven-plugin:4.0.0.4121:sonar[m [1m(default-cli)[m @ [36mchess-ai-game[0;1m ---[m

[[1;33mWARNING[m] 19:20:32.356 Using an unspecified version instead of an explicit plugin version may introduce breaking analysis changes at an unwanted time. It is highly recommended to use an explicit version, e.g. 'org.sonarsource.scanner.maven:sonar-maven-plugin:4.0.0.4121'.
[[1;34mINFO[m] 19:20:32.411 Java 17.0.12 Ubuntu (64-bit)
[[1;34mINFO[m] 19:20:32.416 Linux 5.15.0-117-generic (amd64)
[[1;34mINFO[m] 19:20:33.096 User cache: /var/lib/jenkins/.sonar/cache
[[1;34mINFO[m] 19:20:33.360 Communicating with SonarQube Server 10.6.0.92116

[[1;34mINFO[m] 19:20:33.512 Default locale: "tr_TR", source code encoding: "UTF-8"

[[1;34mINFO[m] 19:20:36.075 Load global settings
[[1;34mINFO[m] [1m------------------------------------------------------------------------[m
[[1;34mINFO[m] [1;31mBUILD FAILURE[m
[[1;34mINFO[m] [1m------------------------------------------------------------------------[m
[[1;34mINFO[m] Total time:  6.075 s
[[1;34mINFO[m] Finished at: 2024-08-17T19:20:36+03:00
[[1;34mINFO[m] [1m------------------------------------------------------------------------[m
[[1;31mERROR[m] Failed to execute goal [32morg.sonarsource.scanner.maven:sonar-maven-plugin:4.0.0.4121:sonar[m [1m(default-cli)[m on project [36mchess-ai-game[m: [1;31mNot authorized. Please check the user token in the property 'sonar.token' or the credentials in the properties 'sonar.login' and 'sonar.password'.[m -> [1m[Help 1][m
[[1;31mERROR[m] 
[[1;31mERROR[m] To see the full stack trace of the errors, re-run Maven with the [1m-e[m switch.
[[1;31mERROR[m] Re-run Maven using the [1m-X[m switch to enable full debug logging.
[[1;31mERROR[m] 
[[1;31mERROR[m] For more information about the errors and possible solutions, please read the following articles:
[[1;31mERROR[m] [1m[Help 1][m http://cwiki.apache.org/confluence/display/MAVEN/MojoExecutionException

[Pipeline] }
WARN: Unable to locate 'report-task.txt' in the workspace. Did the SonarScanner succeed?
[Pipeline] // withSonarQubeEnv
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Run)

Stage "Run" skipped due to earlier failure(s)
[Pipeline] getContext
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
ERROR: script returned exit code 1

Finished: FAILURE
