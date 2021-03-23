FROM node:14.15.4

RUN apt-get update
RUN apt-get install -y locales
RUN locale-gen ja_JP.UTF-8
RUN localedef -f UTF-8 -i ja_JP ja_JP
ENV LANG ja_JP.UTF-8
ENV TZ Asia/Tokyo
RUN yarn global add yo@3.0.0
RUN yarn global add generator-hubot-yarn
RUN yarn global add coffeescript@1.12.7
RUN useradd hubot-todo -m
USER hubot-todo
WORKDIR /home/hubot-todo
