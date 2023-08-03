To execute this repro:

```shell
yarn
yarn start
```

Example output:

```shell
~/src/repro-node-fetch-premature-close-with-agent$ yarn start
yarn run v1.22.19
$ ts-node index.ts
>>> request 0 : start
>>> request 1 : start
>>> request 2 : start
>>> request 3 : start
>>> request 4 : start
>>> request 5 : start
>>> request 0 : using socket 0
>>> request 1 : using socket 1
>>> request 2 : using socket 2
>>> request 3 : using socket 3
>>> request 4 : using socket 4
>>> request 2 : got response 0
>>>>>> is chunked
>>> request 3 : got response 1
>>>>>> is chunked
>>> request 1 : got response 2
>>>>>> is chunked
>>> request 0 : got response 3
>>>>>> is chunked
>>> request 4 : got response 4
>>>>>> is chunked
>>> request 5 : using socket 1
>>> request 1 : close event for socket 1
>>>>>> listener count 1
>>>>>> 💀 premature close 💀
>>> request 2 : close event for socket 2
>>>>>> listener count 0
>>> request 3 : close event for socket 3
>>>>>> listener count 0
>>> request 0 : close event for socket 0
>>>>>> listener count 0
>>> request 4 : close event for socket 4
>>>>>> listener count 0
>>> request 5 : got response 5
>>>>>> is chunked
6
>>> request 5 : close event for socket 1
>>>>>> listener count 0
Done in 3.75s.
```
