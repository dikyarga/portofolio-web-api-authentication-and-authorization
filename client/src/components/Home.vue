<template>
<div class="">
    <router-view></router-view>
    <h2>Anggap ini Homepage</h2>
    <el-row>
        <el-col :span="20">
            <el-card class="box-card" v-for="item in questions">
                <div slot="header" class="clearfix">
                    <span style="line-height: 36px; font-size: 20px;">{{ item.title }}</span>
                    <el-button style="float: right; " type="primary" @click.native="toDetailQuestion(item.slug)">answer this question</el-button>
                </div>
                <div class="">
                    {{ item.content }}
                </div>
                <br>
                <el-collapse v-model="activeNames" @change="handleChange">
                  <el-button style="float: right; margin-right: 20px; margin-top:3px;" :plain="true" type="info">{{ item.Answers.length }} answers</el-button>
                    <el-collapse-item title="Answers" name="1">
                        <div>
                            <el-card class="box-card" v-for="answer in item.Answers">
                                    <h3>{{ answer.content }}</h3>
                                    <br>
                                    - by {{answer.User.name}}
                            </el-card>

                        </div>
                    </el-collapse-item>
                </el-collapse>
            </el-card>
        </el-col>
    </el-row>
</div>
</template>

<script>
export default {
    data() {
        return {
            questions: []
        }
    },
    created() {
        this.getData()
    },
    methods: {
        getData() {
            let self = this;
            this.axios.get('/home')
                .then(response => {
                    // JSON responses are automatically parsed.
                    console.log('response:', response.data);
                    self.questions = response.data
                })
                .catch(e => {
                    console.log(e);
                })
        },
        toDetailQuestion(slug){
          this.$router.push('/question/' + slug)
        }
    }
}
</script>

<style>
.el-card {
    margin-bottom: 30px;
}
</style>
