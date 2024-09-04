import React from 'react'
import CommentsCard from './CommentsCard'
const data = [
  {
    username: "user1",
    comment: "Top-level comment 1",
    replies: [
      {
        username: "user2",
        comment: "Reply to comment 1",
        replies: [
          {
            username: "user3",
            comment: "Nested reply 1",
            replies: [
              {
                username: "user4",
                comment: "Nested reply 2",
                replies: [
                  {
                    username: "user23",
                    comment: "Top-level comment 10",
                    replies: [
                      {
                        username: "user24",
                        comment: "Reply to comment 10",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    username: "user5",
    comment: "Top-level comment 2",
    replies: [
      {
        username: "user6",
        comment: "Reply to comment 2",
      },
      {
        username: "user7",
        comment: "Another reply to comment 2",
        replies: [
          {
            username: "user8",
            comment: "Nested reply 3",
            replies: [
              {
                username: "user18",
                comment: "Top-level comment 7",
              },
              {
                username: "user19",
                comment: "Top-level comment 8",
                replies: [
                  {
                    username: "user20",
                    comment: "Reply to comment 8",
                    replies: [
                      {
                        username: "user21",
                        comment: "Nested reply 7",
                      },
                    ],
                  },
                ],
              },
              {
                username: "user22",
                comment: "Top-level comment 9",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    username: "user9",
    comment: "Top-level comment 3",
  },
  {
    username: "user10",
    comment: "Top-level comment 4",
    replies: [
      {
        username: "user11",
        comment: "Reply to comment 4",
        replies: [
          {
            username: "user12",
            comment: "Nested reply 4",
            replies: [
              {
                username: "user13",
                comment: "Nested reply 5",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    username: "user14",
    comment: "Top-level comment 5",
  },
  {
    username: "user15",
    comment: "Top-level comment 6",
    replies: [
      {
        username: "user16",
        comment: "Reply to comment 6",
        replies: [
          {
            username: "user17",
            comment: "Nested reply 6",
          },
        ],
      },
    ],
  },
];

const Comments = () => {
  return (
    <div>
      <CommentsCard data={data} />
    </div>
  )
}

export default Comments