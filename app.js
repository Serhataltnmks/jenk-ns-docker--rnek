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
No credentials specified
Cloning the remote Git repository
Cloning repository https://gitlab.com/serhataltnmks/chess-ai-game.git
 > git init /var/lib/jenkins/workspace/chess # timeout=10
Fetching upstream changes from https://gitlab.com/serhataltnmks/chess-ai-game.git
 > git --version # timeout=10
 > git --version # 'git version 2.25.1'
 > git fetch --tags --force --progress -- https://gitlab.com/serhataltnmks/chess-ai-game.git +refs/heads/*:refs/remotes/origin/* # timeout=10
ERROR: Error cloning remote repo 'origin'
hudson.plugins.git.GitException: Command "git fetch --tags --force --progress -- https://gitlab.com/serhataltnmks/chess-ai-game.git +refs/heads/*:refs/remotes/origin/*" returned status code 128:
stdout: 
stderr: remote: HTTP Basic: Access denied. The provided password or token is incorrect or your account has 2FA enabled and you must use a personal access token instead of a password. See https://gitlab.com/help/topics/git/troubleshooting_git#error-on-git-fetch-http-basic-access-denied
fatal: 'https://gitlab.com/serhataltnmks/chess-ai-game.git/' için kimlik doğrulaması başarısız

	at PluginClassLoader for git-client//org.jenkinsci.plugins.gitclient.CliGitAPIImpl.launchCommandIn(CliGitAPIImpl.java:2846)
	at PluginClassLoader for git-client//org.jenkinsci.plugins.gitclient.CliGitAPIImpl.launchCommandWithCredentials(CliGitAPIImpl.java:2185)
	at PluginClassLoader for git-client//org.jenkinsci.plugins.gitclient.CliGitAPIImpl$1.execute(CliGitAPIImpl.java:635)
	at PluginClassLoader for git-client//org.jenkinsci.plugins.gitclient.CliGitAPIImpl$2.execute(CliGitAPIImpl.java:871)
	at PluginClassLoader for git//hudson.plugins.git.GitSCM.retrieveChanges(GitSCM.java:1220)
	at PluginClassLoader for git//hudson.plugins.git.GitSCM.checkout(GitSCM.java:1303)
	at PluginClassLoader for workflow-scm-step//org.jenkinsci.plugins.workflow.steps.scm.SCMStep.checkout(SCMStep.java:136)
	at PluginClassLoader for workflow-scm-step//org.jenkinsci.plugins.workflow.steps.scm.SCMStep$StepExecutionImpl.run(SCMStep.java:101)
	at PluginClassLoader for workflow-scm-step//org.jenkinsci.plugins.workflow.steps.scm.SCMStep$StepExecutionImpl.run(SCMStep.java:88)
	at PluginClassLoader for workflow-step-api//org.jenkinsci.plugins.workflow.steps.SynchronousNonBlockingStepExecution.lambda$start$0(SynchronousNonBlockingStepExecution.java:47)
	at java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)
	at java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)
	at java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)
	at java.base/java.lang.Thread.run(Thread.java:840)
ERROR: Error cloning remote repo 'origin'
ERROR: Maximum checkout retry attempts reached, aborting
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Build)
Stage "Build" skipped due to earlier failure(s)
[Pipeline] getContext
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
ERROR: Error cloning remote repo 'origin'
Finished: FAILURE
